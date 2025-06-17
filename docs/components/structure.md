# Component Architecture & File Structure

This document outlines the philosophy behind the component architecture and file organization in this Next.js project. The goal is to maintain a scalable, maintainable, and understandable codebase.

## Core Principles

1.  **Modularity:** Components should be small, focused, and reusable where possible.
2.  **Clarity:** Folder and file names should clearly indicate their purpose and scope.
3.  **Colocation (for features):** Components specific to a particular feature or page section are grouped together.
4.  **Separation of Concerns:**
    -   UI components are distinct from layout components.
    -   Page-specific compositions are distinct from general-purpose UI elements.
    -   Hooks and utility functions reside in their own dedicated directories.

## Main `src/` Directory Structure

-   **`src/app/`**: Next.js App Router. Contains page routes, layouts, and route-specific components.
    -   **`src/app/(pages)/`**: Convention for grouping main site pages (e.g., `home`, `about`, `contact`).
    -   **`src/app/projects/[slug]/`**: Dynamic route for project detail pages. `page.tsx` here orchestrates project-specific components.
-   **`src/components/`**: The primary directory for all React components.
-   **`src/hooks/`**: Custom React hooks (e.g., `useWindowSize`).
-   **`src/lib/`**: Utility functions, Sanity client, type definitions, data fetching logic.
-   **`src/sanity/`**: Sanity.io configuration and content schemas.
-   **`src/types/`**: Global TypeScript types (though `src/lib/types.ts` is preferred for domain-specific types).

## `src/components/` Sub-directories

This is where the component organization strategy is most evident:

1.  **`src/components/layout/`**
    -   **Purpose:** Components that define the overall structure and persistent elements of the site.
    -   **Examples:** `Header.tsx`, `Footer.tsx`, `Sidebar.tsx` (if any).
    -   **Scope:** Generally used in root layouts (`src/app/layout.tsx`) or high-level page layouts.

2.  **`src/components/sections/`**
    -   **Purpose:** Larger, composite components that make up distinct sections of a page. These often combine multiple UI elements and business logic.
    -   **Examples:** `HeroSection.tsx`, `FeaturedProjectsSection.tsx`, `ContactFormSection.tsx`.
    -   **Scope:** Typically imported directly into page files within `src/app/`. They represent significant blocks of content or functionality.

3.  **`src/components/ui/`**
    -   **Purpose:** Small, reusable, and often generic UI elements. These are the building blocks for more complex components.
    -   **Examples:** `Button.tsx`, `Card.tsx`, `Input.tsx`, `ProjectCard.tsx`, `TechStackIcons.tsx`.
    -   **Scope:** Can be used anywhere across the application – in sections, layouts, or even other UI components. They should be highly versatile and styleable.

4.  **`src/components/project_detail/`**
    -   **Purpose:** Components specifically designed for the project detail page (`src/app/projects/[slug]/page.tsx`).
    -   **Examples:** `ProjectDetailHeader.tsx`, `TechStackSection.tsx` (could be a more specific version than a generic one), `ImageGallerySection.tsx`.
    -   **Scope:** Tightly coupled with the project detail feature. This demonstrates colocation for feature-specific components. If a component here becomes generally useful, it might be refactored and moved to `ui/` or `sections/`.

## Philosophy

-   **Start Specific, Generalize Later:** It's often better to build components specific to a feature (like in `project_detail/`) and then refactor them into `ui/` or `sections/` if they prove to be reusable elsewhere. This avoids premature abstraction.
-   **Props for Reusability:** Generic UI components (`ui/`) should be made reusable primarily through props. Avoid embedding business logic directly in them.
-   **Composition over Inheritance:** Build complex UIs by composing smaller, simpler components.
-   **Clear Naming:** File and component names should be descriptive (e.g., `FeaturedProjectsSection.tsx` is clearer than `FtrPrjSect.tsx`).

This structure aims to provide a clear mental model for developers, making it easier to locate files, understand component responsibilities, and contribute effectively.

*Last Updated: 17/06/2025*
