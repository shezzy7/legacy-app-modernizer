# Project Architecture Rules (Non-Obvious Only)

- This is a **two-component legacy app** — `DataFetcher` and `UserProfile` in `src/components/`; no routing, no state management, no context
- The migration target is React 16.8+ hooks — the installed version (^16.8.0) already supports hooks, so no dependency upgrades are needed
- `componentWillReceiveProps` in `UserProfile` can be eliminated entirely by reading directly from `props` — no `useEffect` or state needed for that pattern
- No build pipeline exists — there is no Babel/Webpack config, so the modernized components cannot be executed or bundled without adding tooling
- The generate-report script (`report.js`) is hardcoded and not derived from actual analysis — any real reporting must be done by reading source files programmatically
