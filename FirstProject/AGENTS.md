# AI Coding Agent Instructions for FirstProject

Welcome to the FirstProject Angular codebase! This file provides concise, actionable guidance for AI coding agents to be productive and follow project conventions. For details, always refer to the linked documentation.

## Key Commands
- **Start development server:** `npm start` or `ng serve`
- **Build project:** `npm run build` or `ng build`
- **Run unit tests:** `npm test` or `ng test`
- **Run end-to-end tests:** `ng e2e` (configure your preferred e2e framework)
- **Generate components/services:** `ng generate <schematic> <name>`

See [README.md](README.md) for more details and command explanations.

## Project Structure
- Main source code: `src/`
- App entry point: `src/main.ts`
- Server-side entry: `src/main.server.ts`, `src/server.ts`
- App module and routes: `src/app/`

## Conventions
- Use Angular CLI for scaffolding and scripts.
- Place new components, services, and modules in `src/app/`.
- Follow Angular style guide for naming and structure.
- Use `dist/` for build artifacts.

## Testing
- Unit tests use [Vitest](https://vitest.dev/). Run with `ng test`.
- End-to-end tests: set up your preferred framework if needed.

## Troubleshooting
- If you encounter build or serve errors, ensure dependencies are installed (`npm install`).
- For CLI issues, consult the [Angular CLI docs](https://angular.dev/tools/cli).

## Additional Resources
- [README.md](README.md) — Project overview and command reference
- [Angular CLI Docs](https://angular.dev/tools/cli)

---

If you add new conventions or scripts, please update this file and the README accordingly.
