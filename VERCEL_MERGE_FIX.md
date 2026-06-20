# Vercel merge-conflict fix

The failed Vercel deploy was caused by unresolved Git conflict markers in the GitHub `main` branch.

Before deploying, search for Git conflict marker lines that start with repeated left angle brackets, repeated equals signs, or repeated right angle brackets.

As of the failed deploy, these repo files contained conflict markers and should be replaced with the clean versions from this project ZIP:

```text
README.md
CODEX_TASK.md
app/api/game/start/route.ts
app/api/game/next/route.ts
app/api/game/answer/route.ts
src/lib/game/config.ts
src/lib/game/types.ts
src/lib/game/questions.ts
```

This project now includes `scripts/check-conflicts.mjs` and a `prebuild` hook so future deployments fail with a clear conflict-marker message before Next.js/Turbopack starts parsing.

After replacing the files in GitHub, commit and push to `main`, then redeploy in Vercel.
