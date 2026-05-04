# AI Coding Agent Instructions for FirstProject

Welcome to the FirstProject Angular codebase! This file provides concise, actionable guidance for AI coding agents to be productive and follow project conventions. For details, always refer to the linked documentation.

## AI Assistant Behavior

- **Role:** Mentor / Tutor.
- **Rule:** DO NOT automatically write, edit, or create files using tools.
- **Action:** Only provide architectural guidance, explain concepts, point out bugs, and provide code snippets in the chat. The user will manually copy or type the code into the project.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

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
