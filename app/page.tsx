'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AUTO_ADVANCE_MS, ENTRY_FEE, GUARANTEED_PRIZE, PRIZE_TIERS, STAT_LABELS, TARGET_MARGIN } from '@/lib/game/config';
import { getMaxBonusEv, getNextPrize, getPrizeByStreak, getProjectedMargin } from '@/lib/game/economics';
import type { BaseStats, PrizeTier, PublicGameQuestion, StatKey } from '@/lib/game/types';

type RunState = {
  token: string;
  runId: string;
  streak: number;
  bestPrizeStreak: number;
  status: 'active' | 'lost' | 'claimed';
  question: PublicGameQuestion | null;
};

type AnswerResult = { correct: boolean; timedOut: boolean; answeredQuestion: PublicGameQuestion };
type ClaimState = { prize: PrizeTier; claimCode: string };

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const raw = await response.text();
  let data: (T & { error?: string }) | { error?: string } = {};

  if (raw.trim()) {
    try {
      data = JSON.parse(raw) as T & { error?: string };
    } catch {
      data = { error: raw.slice(0, 300) };
    }
  }

  if (!response.ok) throw new Error(data.error ?? `Request failed with status ${response.status}.`);
  return data as T;
}

function money(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
}

function PokemonImg({ src, fallback, alt }: { src: string; fallback: string; alt: string }) {
  const [current, setCurrent] = useState(src);
  useEffect(() => setCurrent(src), [src]);
  return <img src={current} alt={alt} onError={() => setCurrent(fallback)} />;
}

function StatReveal({ stats, highlight }: { stats?: BaseStats; highlight: StatKey }) {
  if (!stats) return null;
  const rows: Array<[StatKey, string]> = [['hp','HP'],['attack','Atk'],['defense','Def'],['spAttack','SpA'],['spDefense','SpD'],['speed','Speed']];
  return <div className="stat-list">{rows.map(([key,label]) => <div className="stat-row" key={key} style={{opacity:key===highlight?1:.68}}><span>{label}</span><span className="bar"><span style={{width:`${Math.min(100,(stats[key]/180)*100)}%`}} /></span><strong>{stats[key]}</strong></div>)}</div>;
}

function PokemonCard({ pokemon, side, statKey, reveal, selectedSide, onPick, busy }: {
  pokemon: PublicGameQuestion['left'];
  side: 'left' | 'right';
  statKey: StatKey;
  reveal?: PublicGameQuestion['reveal'];
  selectedSide: 'left' | 'right' | null;
  onPick: (side: 'left' | 'right') => void;
  busy: boolean;
}) {
  const correct = reveal?.correctSide === side;
  const wrong = reveal && selectedSide === side && !correct;
  const value = reveal ? (side === 'left' ? reveal.leftValue : reveal.rightValue) : null;
  return <article className={`card ${correct?'correct':''} ${wrong?'wrong':''}`}>
    <div className="art"><PokemonImg src={pokemon.imageUrl} fallback={pokemon.fallbackImageUrl} alt={pokemon.name} /></div>
    <h3 className="name">{pokemon.name}</h3>
    <a className="link" href={pokemon.pokemonComUrl} target="_blank" rel="noreferrer">Official Pokedex entry</a>
    <button className="pick" disabled={busy || Boolean(reveal)} onClick={() => onPick(side)}>Choose {pokemon.name}</button>
    {reveal && <><div className="reveal-num">{value}<small>{STAT_LABELS[statKey]}</small></div><StatReveal stats={pokemon.stats} highlight={statKey} /></>}
  </article>;
}

function PrizeLadder({ streak, bestPrizeStreak }: { streak: number; bestPrizeStreak: number }) {
  const cards = [{ streak: 0, name: GUARANTEED_PRIZE.name, label: GUARANTEED_PRIZE.label }, ...PRIZE_TIERS];
  const nextPrize = getNextPrize(streak);
  return <section className="panel"><div className="eyebrow">Prize Ladder</div><h2>Highest unlocked bonus prize wins</h2><p className="notice">Bonus prizes are not cumulative. Each higher tier replaces the previous bonus prize.</p><div className="ladder">{cards.map((tier) => {
    const unlocked = tier.streak === 0 || bestPrizeStreak >= tier.streak;
    const next = nextPrize?.streak === tier.streak;
    return <article className={`prize ${unlocked?'unlocked':''} ${next?'next':''}`} key={`${tier.streak}-${tier.name}`}><span className="pill">{tier.streak===0?'Entry':`${tier.streak} wins`}</span><h3>{tier.name}</h3><p>{tier.label}</p>{unlocked && <p style={{color:'var(--green)',fontWeight:900}}>Unlocked</p>}</article>;
  })}</div></section>;
}

function applyAnswerData(data: RunState & AnswerResult, setRun: (run: RunState) => void, setAnswer: (answer: AnswerResult) => void) {
  setRun({ token: data.token, runId: data.runId, streak: data.streak, bestPrizeStreak: data.bestPrizeStreak, status: data.status, question: data.question });
  setAnswer({ correct: data.correct, timedOut: data.timedOut, answeredQuestion: data.answeredQuestion });
}

export default function Home() {
  const [run, setRun] = useState<RunState | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answer, setAnswer] = useState<AnswerResult | null>(null);
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [claim, setClaim] = useState<ClaimState | null>(null);
  const [isPopout, setIsPopout] = useState(false);
  const gameShellRef = useRef<HTMLElement | null>(null);
  const busyRef = useRef(false);

  function beginBusy() { busyRef.current = true; setBusy(true); }
  function endBusy() { busyRef.current = false; setBusy(false); }

  const activeQuestion = answer?.answeredQuestion ?? run?.question ?? null;
  const bestPrize = useMemo(() => getPrizeByStreak(run?.bestPrizeStreak ?? 0), [run?.bestPrizeStreak]);
  const nextPrize = useMemo(() => getNextPrize(run?.streak ?? 0), [run?.streak]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const popout = params.get('popout') === '1';
    setIsPopout(popout);
    document.body.classList.toggle('arcade-body', popout);
    return () => document.body.classList.remove('arcade-body');
  }, []);

  useEffect(() => {
    if (!run?.question || answer || run.status !== 'active') return;
    const question = run.question;
    setTimeLeft(question.seconds);
    const started = Date.now();
    let timedOut = false;
    const id = window.setInterval(() => {
      const remaining = Math.max(0, question.seconds - (Date.now() - started) / 1000);
      setTimeLeft(remaining);
      if (remaining <= 0 && !timedOut) {
        timedOut = true;
        window.clearInterval(id);
        void submitTimeout(question.questionId);
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [run?.question?.questionId, answer, run?.status]);

  useEffect(() => {
    if (!answer?.correct || run?.status !== 'active') return;
    const id = window.setTimeout(() => { void nextRound(); }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [answer?.answeredQuestion.questionId, answer?.correct, run?.status]);

  async function startRun() {
    void enterFullscreen();
    beginBusy(); setError(null); setAnswer(null); setSelectedSide(null); setClaim(null);
    try { setRun(await postJson<RunState>('/api/game/start', {})); } catch (e) { setError(e instanceof Error ? e.message : 'Could not start run.'); }
    finally { endBusy(); }
  }

  async function submit(side: 'left' | 'right') {
    if (!run?.question || busyRef.current) return;
    beginBusy(); setError(null); setSelectedSide(side);
    try {
      const data = await postJson<RunState & AnswerResult>('/api/game/answer', {
        token: run.token,
        questionId: run.question.questionId,
        selectedSide: side
      });
      applyAnswerData(data, setRun, setAnswer);
    } catch (e) { setError(e instanceof Error ? e.message : 'Answer failed.'); }
    finally { endBusy(); }
  }

  async function submitTimeout(questionId: string) {
    if (!run?.token || busyRef.current) return;
    beginBusy(); setError(null); setSelectedSide(null);
    try {
      const data = await postJson<RunState & AnswerResult>('/api/game/answer', { token: run.token, questionId, timedOut: true });
      applyAnswerData(data, setRun, setAnswer);
    } catch (e) { setError(e instanceof Error ? e.message : 'Timer expired. Could not submit timeout.'); }
    finally { endBusy(); }
  }

  async function nextRound() {
    if (!run || busyRef.current) return;
    beginBusy(); setError(null); setAnswer(null); setSelectedSide(null);
    try { setRun(await postJson<RunState>('/api/game/next', { token: run.token })); } catch (e) { setError(e instanceof Error ? e.message : 'Could not load next round.'); }
    finally { endBusy(); }
  }

  async function claimPrize() {
    if (!run) return;
    beginBusy(); setError(null);
    try {
      const data = await postJson<RunState & ClaimState>('/api/game/claim', { token: run.token });
      setRun({ token: data.token, runId: data.runId, streak: data.streak, bestPrizeStreak: data.bestPrizeStreak, status: data.status, question: null });
      setClaim({ prize: data.prize, claimCode: data.claimCode });
      setAnswer(null);
    } catch (e) { setError(e instanceof Error ? e.message : 'Could not claim prize.'); }
    finally { endBusy(); }
  }

  async function enterFullscreen() {
    try {
      const target = gameShellRef.current ?? document.documentElement;
      if (!document.fullscreenElement) await target.requestFullscreen();
    } catch {
      setError('Fullscreen was blocked. Use the popout window controls or browser fullscreen shortcut.');
    }
  }

  function openPopoutGame() {
    const url = new URL(window.location.href);
    url.searchParams.set('popout', '1');
    const features = `popup=yes,width=${window.screen.availWidth},height=${window.screen.availHeight},left=0,top=0`;
    const handle = window.open(url.toString(), 'pokemon-prize-ladder-arcade', features);
    if (!handle) setError('Popout was blocked. Allow popups for this site and try again.');
  }

  const pct = activeQuestion ? Math.max(0, Math.min(100, (timeLeft / activeQuestion.seconds) * 100)) : 0;
  const autoAdvanceSeconds = Math.ceil(AUTO_ADVANCE_MS / 1000);

  return <main ref={gameShellRef} className={`wrap game-shell ${isPopout ? 'arcade' : ''}`}>
    <section className="hero"><div><div className="eyebrow">Base Stat Higher / Lower</div><h1>Build the streak. Win bigger prizes.</h1><p className="lead">Players pay {money(ENTRY_FEE)}, receive {GUARANTEED_PRIZE.name} guaranteed, then answer timed Pokemon stat comparisons. The ladder is tuned around a {(TARGET_MARGIN*100).toFixed(0)}% target margin.</p><div className="actions"><button className="btn" onClick={startRun} disabled={busy}>{run?'Restart Fullscreen Run':'Start Fullscreen Game'}</button><button className="btn secondary" onClick={openPopoutGame} disabled={busy}>Popout Game</button><button className="btn ghost" onClick={enterFullscreen}>Enter Fullscreen</button>{bestPrize && run?.status !== 'claimed' && <button className="btn secondary" disabled={busy} onClick={claimPrize}>Claim {bestPrize.name}</button>}</div>{answer?.correct && run?.status === 'active' && <p className="feedback"><strong>Correct.</strong> Next round loads automatically in about {autoAdvanceSeconds} seconds.</p>}{error && <p className="feedback" style={{color:'var(--red)'}}>{error}</p>}</div><aside className="metrics"><div className="metric"><strong>{run?.streak ?? 0}</strong><span>Current streak</span></div><div className="metric"><strong>{nextPrize?.streak ?? 'Max'}</strong><span>Next unlock</span></div><div className="metric"><strong>{bestPrize?.name ?? GUARANTEED_PRIZE.name}</strong><span>Best unlocked prize</span></div><div className="metric"><strong>{activeQuestion && !answer ? `${Math.ceil(timeLeft)}s` : '--'}</strong><span>Timer</span></div></aside></section>

    {activeQuestion && <section className="panel game-panel"><div className="status"><div className="metric"><strong>{activeQuestion.round}</strong><span>Round</span></div><div className="metric"><strong>{activeQuestion.comparisonKind === 'total' ? 'Total' : 'Exact'}</strong><span>Question type</span></div><div className="metric"><strong>{answer ? activeQuestion.delta : 'Hidden'}</strong><span>Stat delta</span></div><div className="metric"><strong>{answer ? 'Paused' : `${timeLeft.toFixed(1)}s`}</strong><span>Time left</span>{!answer && <div className="timer"><span style={{width:`${pct}%`}} /></div>}</div></div><div className="question-head"><div><div className="eyebrow">{STAT_LABELS[activeQuestion.statKey]}</div><h2>{activeQuestion.prompt}</h2><p>{answer ? 'Stats revealed. Correct answers advance automatically; claim any unlocked prize before you risk the next pick.' : 'Choose before the timer hits zero.'}</p></div></div><div className="battle"><PokemonCard pokemon={activeQuestion.left} side="left" statKey={activeQuestion.statKey} reveal={activeQuestion.reveal} selectedSide={selectedSide} onPick={submit} busy={busy} /><div className="vs">VS</div><PokemonCard pokemon={activeQuestion.right} side="right" statKey={activeQuestion.statKey} reveal={activeQuestion.reveal} selectedSide={selectedSide} onPick={submit} busy={busy} /></div>{answer && <div className="feedback"><strong>{answer.correct ? 'Correct.' : answer.timedOut ? 'Time ran out.' : 'Incorrect.'}</strong> {answer.correct ? `Your streak is now ${run?.streak ?? 0}. Next round is loading automatically.` : bestPrize ? `Run ended. You unlocked ${bestPrize.name}.` : 'Run ended before a bonus prize unlock.'}</div>}</section>}

    {!run && !isPopout && <section className="panel"><div className="eyebrow">How it plays</div><h2>Images are pulled per Pokemon.</h2><p className="notice">The demo seed displays official Pokedex image URLs by ID. The included seed script can also fetch Pokemon.com Pokedex image URLs for every generated Pokemon and optionally save them into <code>public/images/pokemon</code>.</p></section>}

    <PrizeLadder streak={run?.streak ?? 0} bestPrizeStreak={run?.bestPrizeStreak ?? 0} />

    {!isPopout && <section className="panel"><div className="eyebrow">Operator Math</div><div className="metrics"><div className="metric"><strong>{money(ENTRY_FEE)}</strong><span>Entry</span></div><div className="metric"><strong>{money(GUARANTEED_PRIZE.cost)}</strong><span>Guaranteed cost</span></div><div className="metric"><strong>{money(getMaxBonusEv())}</strong><span>Bonus EV budget</span></div><div className="metric"><strong>{(getProjectedMargin(100)*100).toFixed(0)}%</strong><span>One ETB winner margin</span></div></div><p className="notice" style={{marginTop:14}}>Track real event win rates. If too many players reach tiers, raise streak gates, tighten deltas, shorten timers, or cap prize inventory.</p></section>}

    {!isPopout && <footer className="foot">Pokemon names, images, and marks belong to their owners. This is a technical prototype; get licensing/legal review before a paid public event.</footer>}

    {claim && <div className="claim"><div className="claim-box"><div className="eyebrow">Prize Claim</div><h2>{claim.prize.name}</h2><p className="notice">Show this signed claim code to staff.</p><code className="code">{claim.claimCode}</code><button className="btn" onClick={() => setClaim(null)}>Close</button></div></div>}
  </main>;
}
