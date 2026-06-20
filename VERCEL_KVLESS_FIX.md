# Vercel KV-less run storage fix

This version does not require Vercel KV or Upstash Redis.

Run state is encrypted into the server-issued game token using `GAME_SECRET`, so serverless functions can validate and continue a run even when Vercel routes requests to different instances. The token carries only stored run metadata and the stored question IDs. Hidden stat values are still not sent to the browser until the answer is resolved.

Keep these environment variables in Vercel:

```env
GAME_SECRET=...
CLAIM_SECRET=...
```

Remove these; they are no longer needed:

```env
KV_REST_API_URL
KV_REST_API_TOKEN
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Security tradeoff: without durable server-side storage, old encrypted tokens cannot be globally revoked across all Vercel instances. The normal client path always uses the newest encrypted token and prevents duplicate Pokemon within a run through the encrypted `seenPokemonIds` ledger. For higher-stakes deployments, durable storage can be reintroduced later as an anti-replay layer, but it is no longer required for the game to run.
