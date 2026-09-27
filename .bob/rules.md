# IBM Bob 2.0 Rules

## Archeologist Subagent
- Analyze all legacy React components in `/src`.
- Identify deprecated lifecycle methods (e.g. `componentWillReceiveProps`) and raw `XMLHttpRequest`.
- Generate `MIGRATION_PLAN.md`.

## Refactorer Subagent
- Refactor class components into functional components with React Hooks.
- Replace `XMLHttpRequest` with standard `fetch()`.