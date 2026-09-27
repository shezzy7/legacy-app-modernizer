# Project Coding Rules (Non-Obvious Only)

- `report.js` uses CommonJS (`require`/`fs.writeFileSync`) — do NOT convert it to ES module syntax; it must stay as-is
- Modernized components must use `useEffect` with an empty dependency array `[]` for `componentDidMount` replacements — omitting `[]` causes infinite re-render loops
- `UserProfile` stores prop in state (`this.state = { user: props.user }`) — the modernized version should derive directly from props, not copy to state
- No test files exist yet; when writing Jest tests for JSX, ensure Babel with `@babel/preset-react` is configured first (not currently set up)
- All components are in `src/components/` — keep this flat structure, no subdirectories
