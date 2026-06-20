'use client';

import { useEffect, useMemo, useState } from 'react';
import { ENTRY_FEE, GUARANTEED_PRIZE, PRIZE_TIERS, STAT_LABELS, TARGET_MARGIN } from '@/lib/game/config';
import { getMaxBonusEv, getNextPrize, getPrizeByStreak, getProjectedMargin, getUnlockedPrize } from '@/lib/game/economics';
import type { BaseStats, PrizeTier, PublicGameQuestion, StatKey } from '@/lib/game/types';

type RunState = {
  token: string;
  runId: string;
  streak: number;
  bestPrizeStreak: number;
  status: 'active' | 'lost' | 'claimed';
  question: PublicGameQuestion | null;
};

type AnswerResult = {
  correct: boolean;
  timedOut: boolean;
  answeredQuestion: PublicGameQuestion;
};

type ClaimState = {
  prize: PrizeTier;
  claimCode: string;
};

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = (await response.json()) as T & { error?: string };
  if (!response.ok) {
    throw new Error(data.error ?? 'Request failed.');
  }
  return data;
}

function formatUsd(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
}

function PokemonImg({ src, fallbackSrc, alt }: { src: string; fallbackSrc: string; alt: string }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => setCurrentSrc(src), [src]);
  return <img src={currentSrc} alt={alt} onError={() => setCurrentSrc(fallbackSrc)} />;
}

function StatReveal({ stats, highlight }: { stats?: BaseStats; highlight: StatKey }) {
  if (!stats) return null;
  const statRows: Array<[StatKey, string]> = [
    ['hp', 'HP'],
    ['attack', 'Atk'],
    ['defense', 'Def'],
    ['spAttack', 'SpA'],
    ['spDefense', 'SpD'],
    ['speed', 'Speed']
  ];

  return (
    <div className="stat-reveal" aria-label="Revealed base stats">
      {statRows.map(([key, label]) => (
        <div className="stat-line" key={key} style={{ opacity: key === highlight ? 1 : 0.68 }}>
          <span>{label}</span>
          <span className="stat-bar"><span style={{ width: `${Math.min(100, (stats[key] / 180) * 100)}%` }} /></span>
          <strong>{stats[key]}</strong>
        </div>
      ))}
    </div>
  );
}

function PokemonCard({
  pokemon,
  statKey,
  reveal,
  side,
  selectedSide,
  onPick,
  busy
}: {
  pokemon: PublicGameQuestion['left'];
  statKey: StatKey;
  reveal?: PublicGameQuestion['reveal'];
  side: 'left' | 'right';
  selectedSide: 'left' | 'right' | null;
  onPick: (side: 'left' | 'right') => void;
  busy: boolean;
}) {
  const isCorrect = reveal?.correctSide === side;
  const isSelected = selectedSide === side;
  const className = reveal ? `pokemon-card ${isCorrect ? 'correct' : isSelected ? 'incorrect' : ''}` : 'pokemon-card';
  const revealedValue = reveal ? (side === 'left' ? reveal.leftValue : reveal.rightValue) : null;

  return (
    <article className={className}>
      <div className="pokemon-art">
        <PokemonImg src={pokemon.imageUrl} fallbackSrc={pokemon.fallbackImageUrl} alt={pokemon.name} />
      </div>
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <a className="pokedex-link" href={pokemon.pokemonComUrl} target="_blank" rel="noreferrer">
        View official Pokédex entry
      </a>
      <button className="choice-button" disabled={busy || Boolean(reveal)} onClick={() => onPick(side)}>
        Choose {pokemon.name}
      </button>
      {reveal && (
        <>
          <div className="reveal-number">
            {revealedValue}
            <small>{STAT_LABELS[statKey]}</small>
          </div>
          <StatReveal stats={pokemon.stats} highlight={statKey} />
        </>
      )}
    </article>
  );
}

function PrizeLadder({ streak, bestPrizeStreak }: { streak: number; bestPrizeStreak: number }) {
  const guaranteed = {
    streak: 0,
    name: GUARANTEED_PRIZE.name,
    retail: GUARANTEED_PRIZE.retail,
    label: GUARANTEED_PRIZE.label
  };
  const cards = [guaranteed, ...PRIZE_TIERS];
  const nextPrize = getNextPrize(streak);

  return (
    <section className="panel">
      <div className="question-heading">
        <div>
          <div className="eyebrow">Prize Ladder</div>
          <h2>Highest unlocked bonus prize wins</h2>
          <p>Bonus tiers are not cumulative. The unlocked prize replaces the prior bonus tier.</p>
        </div>
      </div>
      <div className="prize-ladder">
        {cards.map((tier) => {
          const unlocked = tier.streak === 0 || bestPrizeStreak >= tier.streak;
          const isNext = nextPrize?.streak === tier.streak;
          return (
            <article className={`prize-card ${unlocked ? 'unlocked' : ''} ${isNext ? 'next' : ''}`} key={`${tier.streak}-${tier.name}`}>
              <span className="pill">{tier.streak === 0 ? 'Entry' : `${tier.streak} wins`}</span>
              <h3>{tier.name}</h3>
              <p>{tier.label}</p>
              <p><strong>Retail value:</strong> {formatUsd(tier.retail)}</p>
              {unlocked && <p style={{ color: 'var(--green)', fontWeight: 900 }}>Unlocked</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function EconomicsPanel() {
  const maxBonusEv = getMaxBonusEv();
  const grandPrizeMargin = getProjectedMargin(100);
  return (
    <section className="panel">
      <div className="eyebrow">Operator Math</div>
      <div className="economics">
        <div className="metric">
          <strong>{formatUsd(ENTRY_FEE)}</strong>
          <span>Entry fee</span>
        </div>
        <div className="metric">
          <strong>{formatUsd(GUARANTEED_PRIZE.cost)}</strong>
          <span>Guaranteed cost</span>
        </div>
        <div className="metric">
          <strong>{formatUsd(maxBonusEv)}</strong>
          <span>Bonus EV budget for {(TARGET_MARGIN * 100).toFixed(0)}% margin</span>
        </div>
        <div className="metric">
          <strong>{(grandPrizeMargin * 100).toFixed(0)}%</strong>
          <span>Margin on a single ETB winner before volume smoothing</span>
        </div>
      </div>
      <p className="notice" style={{ marginTop: 14, marginBottom: 0 }}>
        For real events, compare actual win rates against the EV simulator. If players are stronger than expected, raise streak gates, tighten deltas, lower time limits, or cap prize inventory.
      </p>
    </section>
  );
}

export default function Home() {
  const [run, setRun] = useState<RunState | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answerResult, setAnswerResult] = useState<AnswerResult | null>(null);
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [claim, setClaim] = useState<ClaimState | null>(null);

  const activeQuestion = answerResult?.answeredQuestion ?? run?.question ?? null;
  const bestPrize = useMemo(() => getPrizeByStreak(run?.bestPrizeStreak ?? 0), [run?.bestPrizeStreak]);
  const currentUnlock = useMemo(() => getUnlockedPrize(run?.streak ?? 0), [run?.streak]);
  const nextPrize = useMemo(() => getNextPrize(run?.streak ?? 0), [run?.streak]);

  useEffect(() => {
    if (!run?.question || answerResult || run.status !== 'active') return;
    setTimeLeft(run.question.seconds);
    const startedAt = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = (Date.now() - startedAt) / 1000;
      setTimeLeft(Math.max(0, run.question!.seconds - elapsed));
    }, 100);
    return () => window.clearInterval(interval);
  }, [run?.question?.questionId, answerResult, run?.status]);

  async function startRun() {
    setBusy(true);
    setError(null);
    setAnswerResult(null);
    setSelectedSide(null);
    setClaim(null);
    try {
      const data = await postJson<RunState>('/api/game/start', {});
      setRun(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not start the run.');
    } finally {
      setBusy(false);
    }
  }

  async function submitAnswer(side: 'left' | 'right') {
    if (!run?.question || busy) return;
    setBusy(true);
    setError(null);
    setSelectedSide(side);
    try {
      const data = await postJson<RunState & AnswerResult>('/api/game/answer', {
        token: run.token,
        questionId: run.question.questionId,
        selectedSide: side
      });
      setRun({
        token: data.token,
        runId: data.runId,
        streak: data.streak,
        bestPrizeStreak: data.bestPrizeStreak,
        status: data.status,
        question: data.question
      });
      setAnswerResult({ correct: data.correct, timedOut: data.timedOut, answeredQuestion: data.answeredQuestion });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Answer failed.');
    } finally {
      setBusy(false);
    }
  }

  async function nextRound() {
    if (!run?.token) return;
    setBusy(true);
    setError(null);
    setAnswerResult(null);
    setSelectedSide(null);
    try {
      const data = await postJson<RunState>('/api/game/next', { token: run.token });
      setRun(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load next question.');
    } finally {
      setBusy(false);
    }
  }

  async function claimPrize() {
    if (!run?.token) return;
    setBusy(true);
    setError(null);
    try {
      const data = await postJson<RunState & ClaimState>('/api/game/claim', { token: run.token });
      setRun({
        token: data.token,
        runId: data.runId,
        streak: data.streak,
        bestPrizeStreak: data.bestPrizeStreak,
        status: data.status,
        question: null
      });
      setClaim({ prize: data.prize, claimCode: data.claimCode });
      setAnswerResult(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not claim prize.');
    } finally {
      setBusy(false);
    }
  }

  const timerPercent = activeQuestion ? Math.max(0, Math.min(100, (timeLeft / activeQuestion.seconds) * 100)) : 0;

  return (
    <main className="main">
      <section className="hero">
        <div className="hero-card">
          <div className="eyebrow">Base Stat Higher / Lower</div>
          <h1>Build the streak. Climb the prize ladder.</h1>
          <p className="lede">
            Players pay {formatUsd(ENTRY_FEE)}, receive {GUARANTEED_PRIZE.name} to start, then answer timed Pokemon base-stat comparisons. Longer streaks unlock bigger physical prizes.
          </p>
          <div className="controls">
            <button className="primary-button" onClick={startRun} disabled={busy}>
              {run ? 'Restart Run' : 'Start Game'}
            </button>
            {bestPrize && run?.status !== 'claimed' && (
              <button className="secondary-button" onClick={claimPrize} disabled={busy}>
                Claim {bestPrize.name}
              </button>
            )}
            {answerResult?.correct && run?.status === 'active' && (
              <button className="ghost-button" onClick={nextRound} disabled={busy}>
                Next Round
              </button>
            )}
          </div>
          {error && <p className="feedback" style={{ color: 'var(--red)' }}>{error}</p>}
        </div>

        <aside className="hero-side hero-card">
          <div className="metric-grid">
            <div className="metric">
              <strong>{run?.streak ?? 0}</strong>
              <span>Current streak</span>
            </div>
            <div className="metric">
              <strong>{nextPrize ? nextPrize.streak : 'Max'}</strong>
              <span>Next unlock</span>
            </div>
            <div className="metric">
              <strong>{bestPrize ? formatUsd(bestPrize.retail) : formatUsd(GUARANTEED_PRIZE.retail)}</strong>
              <span>Best retail value</span>
            </div>
            <div className="metric">
              <strong>{activeQuestion ? `${Math.ceil(timeLeft)}s` : '--'}</strong>
              <span>Timer</span>
            </div>
          </div>
          <p className="notice">
            {currentUnlock
              ? `Unlocked: ${currentUnlock.name}. You can claim now or keep climbing.`
              : nextPrize
                ? `${nextPrize.streak - (run?.streak ?? 0)} more correct answers to unlock ${nextPrize.name}.`
                : 'Grand prize ladder cleared.'}
          </p>
        </aside>
      </section>

      {activeQuestion && (
        <section className="panel">
          <div className="status-bar">
            <div className="status-item">
              <span className="status-label">Round</span>
              <strong className="status-value">{activeQuestion.round}</strong>
            </div>
            <div className="status-item">
              <span className="status-label">Question Type</span>
              <strong className="status-value">{activeQuestion.comparisonKind === 'total' ? 'Total' : 'Exact Stat'}</strong>
            </div>
            <div className="status-item">
              <span className="status-label">Delta</span>
              <strong className="status-value">{answerResult ? activeQuestion.delta : 'Hidden'}</strong>
            </div>
            <div className="status-item">
              <span className="status-label">Time Left</span>
              <strong className="status-value">{answerResult ? 'Paused' : `${timeLeft.toFixed(1)}s`}</strong>
              {!answerResult && <div className="timer-track"><div className="timer-fill" style={{ width: `${timerPercent}%` }} /></div>}
            </div>
          </div>

          <div className="question-heading">
            <div>
              <div className="eyebrow">{STAT_LABELS[activeQuestion.statKey]}</div>
              <h2>{activeQuestion.prompt}</h2>
              <p>{answerResult ? 'Stats revealed. Lock it in or keep climbing.' : 'Pick before the timer runs out.'}</p>
            </div>
          </div>

          <div className="pokemon-grid">
            <PokemonCard
              pokemon={activeQuestion.left}
              side="left"
              statKey={activeQuestion.statKey}
              reveal={activeQuestion.reveal}
              selectedSide={selectedSide}
              onPick={submitAnswer}
              busy={busy}
            />
            <div className="versus">VS</div>
            <PokemonCard
              pokemon={activeQuestion.right}
              side="right"
              statKey={activeQuestion.statKey}
              reveal={activeQuestion.reveal}
              selectedSide={selectedSide}
              onPick={submitAnswer}
              busy={busy}
            />
          </div>

          {answerResult && (
            <div className="feedback">
              <strong>{answerResult.correct ? 'Correct.' : answerResult.timedOut ? 'Time ran out.' : 'Incorrect.'}</strong>{' '}
              {answerResult.correct
                ? `Your streak is now ${run?.streak ?? 0}.`
                : bestPrize
                  ? `Run ended. You unlocked ${bestPrize.name}.`
                  : 'Run ended before a bonus prize was unlocked.'}
            </div>
          )}
        </section>
      )}

      {!run && (
        <section className="panel">
          <div className="question-heading">
            <div>
              <div className="eyebrow">How it plays</div>
              <h2>Timed, harder every tier, stat-focused.</h2>
              <p>Early rounds lean on total battle stats. Later rounds shift into exact stat-vs-stat calls like HP vs HP, Attack vs Attack, and Speed vs Speed.</p>
            </div>
          </div>
        </section>
      )}

      <PrizeLadder streak={run?.streak ?? 0} bestPrizeStreak={run?.bestPrizeStreak ?? 0} />
      <EconomicsPanel />

      <footer className="footer">
        Pokemon names, images, and related marks belong to their respective owners. This scaffold includes official Pokédex links and external image URLs for prototyping; get proper permission before using protected branding in a commercial prize event.
      </footer>

      {claim && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal-card">
            <div className="eyebrow">Prize Claim</div>
            <h2>{claim.prize.name} unlocked</h2>
            <p className="notice">Show this signed claim code to staff. Staff can verify it with the /api/game/verify-claim endpoint or a small admin screen.</p>
            <code className="claim-code">{claim.claimCode}</code>
            <button className="primary-button" onClick={() => setClaim(null)}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
