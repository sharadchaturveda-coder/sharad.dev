# Resolved Build & Linting Issues

This document serves as a log for common or significant build errors, TypeScript issues, and ESLint/Prettier conflicts encountered and resolved during development. It aims to help developers understand past problems and avoid repeating them.

## Common Issue Categories

### 1. TypeScript Type Errors

-   **Symptom:** `tsc` compilation fails, often with messages like "Type 'X' is not assignable to type 'Y'," "Property 'Z' does not exist on type 'A'," or "Object is possibly 'null' or 'undefined'."
-   **Typical Causes:**
    -   Incorrect type definitions for props, state, or function return values.
    -   Missing null checks or type guards for potentially undefined values.
    -   Incompatibility between third-party library types and project types.
    -   Changes in Sanity schemas not reflected in TypeScript types (`src/lib/types.ts`).
-   **Resolution Strategies:**
    -   Carefully review and correct type definitions.
    -   Use optional chaining (`?.`), nullish coalescing (`??`), or explicit type guards (`if (value) { ... }`).
    -   Update or augment third-party type declarations.
    -   Ensure `src/lib/types.ts` is synchronized with Sanity schema definitions.
    -   Use `as` for type assertions sparingly and only when certain of the type.

### 2. ESLint Rule Violations

-   **Symptom:** `eslint` command fails or shows warnings/errors in the IDE.
-   **Typical Causes:**
    -   Code style inconsistencies (e.g., import order, unused variables, quote style).
    -   Violations of React-specific rules (e.g., hook rules, JSX a11y).
    -   TypeScript-specific linting issues (e.g., `@typescript-eslint/no-explicit-any`).
-   **Resolution Strategies:**
    -   Run `npm run lint -- --fix` or `yarn lint --fix` to auto-fix where possible.
    -   Manually correct the offending code according to the ESLint rule message.
    -   If a rule is overly restrictive or incorrect for a specific case, consider using `// eslint-disable-next-line rulename` with a comment explaining why.
    -   Review and adjust ESLint configuration (`eslint.config.mjs`) if a rule is globally problematic, but do so with caution and team consensus.

### 3. Next.js Build Errors

-   **Symptom:** `npm run build` fails with Next.js specific errors.
-   **Typical Causes:**
    -   Incorrect usage of Next.js APIs (e.g., `next/image`, `next/link`, dynamic imports).
    -   Issues with Server Components vs. Client Components (`"use client"` directive).
    -   Data fetching errors during static generation (SSG) or server-side rendering (SSR).
    -   Configuration problems in `next.config.ts`.
    -   Environment variable issues (missing `NEXT_PUBLIC_` prefix for client-side vars).
-   **Resolution Strategies:**
    -   Consult the Next.js documentation for the specific error message.
    -   Ensure correct usage of `"use client"` at the top of files for components using client-side hooks or event handlers.
    -   Verify data fetching logic and error handling.
    -   Check `next.config.ts` for misconfigurations.
    -   Ensure environment variables are correctly defined and accessible.

### 4. Dependency-Related Issues

-   **Symptom:** Errors related to module resolution, version conflicts, or missing peer dependencies.
-   **Typical Causes:**
    -   Incompatible versions of packages.
    -   Missing `node_modules` or corrupted `package-lock.json`/`yarn.lock`.
    -   Incorrect import paths.
-   **Resolution Strategies:**
    -   Delete `node_modules` and `package-lock.json`/`yarn.lock`, then run `npm install` or `yarn install`.
    -   Use `npm ls [package-name]` to check for version conflicts.
    -   Ensure import paths are correct and point to the intended modules.

## Specific Resolved Issues Log

*(This section should be updated with details of actual significant issues as they are resolved.)*

**Example Entry:**

---
**Date:** 2024-03-15
**Issue:** TypeScript error "Property 'map' does not exist on type 'Project | undefined'" in `FeaturedProjectsSection.tsx`.
**Component/File:** `src/components/sections/FeaturedProjectsSection.tsx`
**Error Message:** `Property 'map' does not exist on type 'Project | undefined'.`
**Cause:** The `getProjects()` function could return `undefined` if the fetch failed or no projects were found, but the component directly tried to call `.map` on the result.
**Resolution:** Added a check to ensure `projects` is an array before attempting to map over it.
```typescript
// Before
// return projects.map(project => <ProjectCard key={project.slug.current} project={project} />);

// After
if (!Array.isArray(projects)) {
  return <p>No projects found or error loading projects.</p>; // Or some other fallback UI
}
return projects.map(project => <ProjectCard key={project.slug.current} project={project} />);
```
**Lesson:** Always handle potential `undefined` or `null` states for data fetched asynchronously, especially before array operations.
---

*Last Updated: 17/06/2025*
