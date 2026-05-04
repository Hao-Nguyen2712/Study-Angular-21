# AI Coding Agent Instructions for FirstProject — Angular 21

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

## Framework & Version Requirements

| Technology       | Version   | Notes                                          |
|------------------|-----------|-------------------------------------------------|
| Angular          | ^21.2.0   | Standalone components by default                |
| PrimeNG          | ^21.x     | UI Component Library (standalone imports)       |
| @primeng/themes  | ^21.x     | Theme system (Aura, Lara, Nora presets)         |
| PrimeIcons       | latest    | Icon font library (`pi pi-*`)                   |
| TailwindCSS      | ^4.x      | Utility CSS framework                           |
| TypeScript       | ~5.9      | Strict mode enabled                             |
| Vitest           | ^4.x      | Unit testing framework                          |
| SSR              | Express 5 | Server-Side Rendering enabled                   |

---

## Key Commands

- **Start development server:** `npm start` or `ng serve`
- **Build project:** `npm run build` or `ng build`
- **Run unit tests:** `npm test` or `ng test`
- **Generate component:** `ng generate component features/<feature>/components/<name>`
- **Generate service:** `ng generate service features/<feature>/services/<name>`
- **Generate interface:** `ng generate interface features/<feature>/models/<name> model`

---

## Project Structure (Feature-based)

```
src/
├── main.ts                          ← Client bootstrap entry point
├── main.server.ts                   ← SSR bootstrap entry point
├── server.ts                        ← Express server for SSR
├── styles.css                       ← Global styles (TailwindCSS + PrimeIcons)
├── index.html                       ← Root HTML
└── app/
    ├── app.ts                       ← Root Component (App)
    ├── app.html                     ← Root template with <router-outlet>
    ├── app.css                      ← Root component styles
    ├── app.config.ts                ← Client providers (Router, PrimeNG, etc.)
    ├── app.config.server.ts         ← SSR providers
    ├── app.routes.ts                ← Client route definitions
    ├── app.routes.server.ts         ← SSR route definitions
    └── features/                    ← Feature modules (one folder per feature)
        └── <feature-name>/
            ├── <feature>.routes.ts  ← Feature-specific routes
            ├── components/          ← Reusable UI components
            ├── pages/               ← Route-bound page components
            ├── services/            ← Business logic & API calls
            └── models/              ← TypeScript interfaces/types
```

---

## Angular 21 Conventions — MUST FOLLOW

### 1. Standalone Components (Default)

All components in Angular 21 are standalone by default. **Do NOT** use `standalone: true` (it's implicit) and **do NOT** use NgModules.

```typescript
// ✅ CORRECT — Angular 21
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],                    // Import dependencies directly here
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class Example {}
```

```typescript
// ❌ WRONG — Old Angular pattern
@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule],
})
export class ExampleModule {}
```

### 2. Signals (Reactive State)

Use **Signals** for all reactive state management. Do NOT use BehaviorSubject or manual change detection for component state.

```typescript
// ✅ CORRECT — Angular 21 Signals
import { signal, computed } from '@angular/core';

export class Example {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(c => c + 1);
  }
}
```

### 3. Template Control Flow (New Syntax)

Use the **built-in control flow** syntax. Do NOT use structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`).

```html
<!-- ✅ CORRECT — Angular 21 -->
@if (isLoading()) {
  <p>Loading...</p>
} @else {
  <p>{{ data() }}</p>
}

@for (item of items(); track item.id) {
  <app-card [data]="item" />
} @empty {
  <p>No items found</p>
}

@switch (status()) {
  @case ('active') { <span>Active</span> }
  @case ('inactive') { <span>Inactive</span> }
  @default { <span>Unknown</span> }
}
```

```html
<!-- ❌ WRONG — Old Angular -->
<p *ngIf="isLoading">Loading...</p>
<div *ngFor="let item of items">{{ item.name }}</div>
```

### 4. Dependency Injection (inject function)

Use the `inject()` function instead of constructor injection.

```typescript
// ✅ CORRECT — Angular 21
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ExampleService {
  private http = inject(HttpClient);
}
```

```typescript
// ❌ AVOID — Old pattern
export class ExampleService {
  constructor(private http: HttpClient) {}
}
```

### 5. Lazy Loading Routes

Use `loadChildren` or `loadComponent` for lazy loading feature routes.

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () =>
      import('./features/feature/feature.routes')
        .then(m => m.featureRoutes)
  }
];
```

---

## PrimeNG 21 Conventions — MUST FOLLOW

### 1. Import Components Directly (NOT Modules)

```typescript
// ✅ CORRECT — PrimeNG 21
import { Button } from 'primeng/button';
import { Table } from 'primeng/table';
import { Card } from 'primeng/card';

@Component({
  imports: [Button, Table, Card],  // Direct component imports
})
```

```typescript
// ❌ WRONG — Old PrimeNG
import { ButtonModule } from 'primeng/button';
```

### 2. Theme Configuration

Theme is configured in `app.config.ts` using `providePrimeNG()` — NOT via CSS file imports.

```typescript
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

// Available theme presets: Aura, Lara, Nora
```

### 3. PrimeIcons

PrimeIcons CSS **must** be imported in `src/styles.css`:
```css
@import 'primeicons/primeicons.css';
```

### 4. Common PrimeNG Component Import Paths

| Component          | Import                                      |
|--------------------|---------------------------------------------|
| Button             | `import { Button } from 'primeng/button'`   |
| Table              | `import { Table } from 'primeng/table'`     |
| Card               | `import { Card } from 'primeng/card'`       |
| Dialog             | `import { Dialog } from 'primeng/dialog'`   |
| InputText          | `import { InputText } from 'primeng/inputtext'` |
| Select (Dropdown)  | `import { Select } from 'primeng/select'`   |
| Toast              | `import { Toast } from 'primeng/toast'`     |
| Menubar            | `import { Menubar } from 'primeng/menubar'` |
| DatePicker         | `import { DatePicker } from 'primeng/datepicker'` |
| Avatar             | `import { Avatar } from 'primeng/avatar'`   |
| Tag                | `import { Tag } from 'primeng/tag'`         |

---

## Styling Rules

1. **TailwindCSS v4** is available globally via `@import 'tailwindcss'` in `styles.css`.
2. **Component-scoped CSS** goes in each component's `.css` file.
3. **PrimeNG themes** are controlled via design tokens in `app.config.ts`, NOT via CSS overrides.
4. When customizing PrimeNG, prefer using the `dt()` (design token) API over raw CSS.

---

## Testing

- Unit tests use **Vitest** (NOT Jasmine/Karma). Run with `ng test`.
- Test files are co-located with components: `<component>.spec.ts`.

---

## Documentation

- Project analysis and setup guides are in `doc/` folder.
- Update this file when adding new conventions, dependencies, or scripts.

---

## Troubleshooting

- If you encounter build or serve errors, ensure dependencies are installed (`npm install`).
- For PrimeNG issues, check [primeng.org](https://primeng.org) for Angular 21 compatible docs.
- For CLI issues, consult the [Angular CLI docs](https://angular.dev/tools/cli).
