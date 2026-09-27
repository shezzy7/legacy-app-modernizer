# Project Documentation Rules (Non-Obvious Only)

- The two source files in `src/components/` are the **entire** codebase — there is no backend, router, or additional UI
- `report.js` at the root is a utility script unrelated to the React app — it generates a markdown summary file
- `.bob/rules.md` defines agent roles (Archeologist, Refactorer) — this is the primary spec for what this project does
- Jest's correct config key for after-framework setup is `setupFilesAfterEnv` (not `setupFilesAfterFramework` — that key does not exist)
- `MIGRATION_PLAN.md` and `MODERNIZATION_REPORT.md` are generated artifacts, not source files
