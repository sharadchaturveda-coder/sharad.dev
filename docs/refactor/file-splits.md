# Refactoring: File Splits & Layout Organization

This document tracks significant refactoring efforts, particularly those involving splitting large files into smaller, more manageable modules, or reorganizing layouts and component structures.

## Guiding Principles for Refactoring

-   **Single Responsibility Principle (SRP):** Components and modules should ideally have one primary reason to change. If a file handles too many concerns, it's a candidate for splitting.
-   **Readability & Maintainability:** Smaller files are generally easier to read, understand, and maintain.
-   **Reusability:** Splitting can help identify and extract reusable pieces of logic or UI.
-   **Bundle Size Optimization:** While Next.js handles code splitting, logical organization can support more efficient dynamic imports or identify large, infrequently used components.
-   **Improved Testability:** Smaller, focused modules are often easier to unit test.

## Common Scenarios for File Splitting

1.  **Large Page Components:** A `page.tsx` file in `src/app/` becoming too complex with many inline sections or extensive logic.
    -   **Solution:** Extract logical sections into their own components under `src/components/sections/` or a feature-specific directory (e.g., `src/components/feature-name/`).
2.  **Overloaded UI Components:** A single UI component in `src/components/ui/` that has too many variants, props, or internal logic.
    -   **Solution:** Break it down into smaller, more specialized UI components or use composition more effectively.
3.  **Monolithic Utility Files:** A single `utils.ts` file in `src/lib/` growing too large with unrelated functions.
    -   **Solution:** Group related utility functions into domain-specific files (e.g., `stringUtils.ts`, `dateUtils.ts`, `apiUtils.ts`).
4.  **Complex Hooks:** A custom hook in `src/hooks/` that manages too much state or has overly complex logic.
    -   **Solution:** Decompose into smaller, more focused hooks that can be composed together.

## Refactor Log

*(This section should be updated with details of actual refactoring activities.)*

**Example Entry:**

---
**Date:** 2024-04-10
**Original File(s):** `src/app/dashboard/page.tsx`
**Problem:** The dashboard page component was over 500 lines, containing logic and JSX for user stats, recent activity, and settings overview. It was becoming difficult to navigate and manage state.

**Refactoring Approach:**
1.  **Identified Sections:** Broke down the dashboard into three main sections: `UserStats`, `RecentActivityFeed`, and `QuickSettings`.
2.  **Created New Components:**
    -   `src/components/dashboard/UserStatsSection.tsx`
    -   `src/components/dashboard/RecentActivityFeed.tsx`
    -   `src/components/dashboard/QuickSettingsOverview.tsx`
3.  **Data Fetching:** Moved section-specific data fetching logic into the new components or passed data down as props from a leaner `src/app/dashboard/page.tsx`.
4.  **State Management:** Localized state to the new components where appropriate. Global dashboard state (if any) remained in `page.tsx` or was lifted to a context/store if necessary.

**New File Structure:**
```
src/
├── app/
│   └── dashboard/
│       └── page.tsx         # Now orchestrates the sections
└── components/
    └── dashboard/
        ├── UserStatsSection.tsx
        ├── RecentActivityFeed.tsx
        └── QuickSettingsOverview.tsx
```

**Benefits:**
-   `page.tsx` reduced to ~100 lines.
-   Improved readability and separation of concerns.
-   Easier to work on individual sections without impacting others.
-   Potential for reusing sections if needed elsewhere (though these were dashboard-specific).
---

*Last Updated: 17/06/2025*
