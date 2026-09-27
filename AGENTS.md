# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Purpose
This is a **legacy React modernization** project. The goal is to migrate legacy class components to functional components with hooks, and replace `XMLHttpRequest` with `fetch()`.

## Commands
```bash
npm test                  # Run all Jest tests
npm run generate-report   # Runs report.js → writes MODERNIZATION_REPORT.md
node report.js            # Equivalent to generate-report
```

No lint, build, or typecheck scripts are configured — the project has no Babel, Webpack, or TypeScript setup.

## Stack
- React 16.8 (class components in source, hooks available)
- Jest (test runner, no config file found — default settings)
- No TypeScript, no ESLint config, no bundler

## Bob-Specific Rules (from `.bob/rules.md`)
- **Archeologist** role: analyze `src/` for deprecated lifecycle methods (`componentWillReceiveProps`) and raw `XMLHttpRequest`; produce `MIGRATION_PLAN.md`
- **Refactorer** role: convert class components → functional components with hooks; replace `XMLHttpRequest` with `fetch()`

## Legacy Patterns to Replace
| Legacy | Modern replacement |
|---|---|
| `componentWillReceiveProps` | `useEffect` with dependency on prop |
| `XMLHttpRequest` + `var self = this` | `fetch()` inside `useEffect` |
| `class Foo extends Component` | `function Foo(props)` with `useState`/`useEffect` |
| `componentDidMount` for data fetch | `useEffect(() => { ... }, [])` |

## Critical Gotchas
- `UserProfile` uses `componentWillReceiveProps` (deprecated since React 16.3, removed in React 18 strict mode)
- `DataFetcher` uses `var self = this` pattern — a sign of pre-arrow-function code; replace the whole block with a single `useEffect` + `fetch()`
- No error handling exists on XHR or state — modernized code should add it
- `report.js` is a plain Node.js script (CommonJS `require`), not an ES module — don't convert it to `import`
