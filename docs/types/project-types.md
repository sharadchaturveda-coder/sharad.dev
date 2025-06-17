# Project-Related Types

This document outlines the primary TypeScript types and schema definitions used for project data within the application, primarily defined in `src/lib/types.ts`.

## `PortableTextBlock`

-   **Source:** Re-exported from `@sanity/types` as `SanityPortableTextBlock`.
-   **Usage:** Represents rich text content from Sanity CMS, allowing for formatted text, lists, and embedded objects.
-   **Fields:** This is a complex type defined by Sanity, typically an array of blocks, each with `_type`, `style`, `children`, `marks`, etc.
-   **Used In:** `Project.overview`, `Project.challenges`.

## `Project` Interface

This is the main interface for structuring project data fetched from Sanity.

-   **`title: string`**: The main title of the project.
-   **`subtitle: string`**: A short descriptive subtitle.
-   **`slug: { current: string; _type: string; }`**:
    -   `current`: The URL-friendly identifier for the project (e.g., "my-cool-project").
    -   `_type`: Sanity's internal type, typically "slug".
-   **`overview: PortableTextBlock[]`**: Rich text description of the project.
-   **`role: string`**: Describes your role in the project.
-   **`techStack: string[]`**: An array of strings listing technologies used (e.g., \["React", "Node.js", "PostgreSQL"]).
-   **`features: { title: string; description: string; _key: string; }[]`**: An array of objects, each detailing a specific feature.
    -   `title`: Title of the feature.
    -   `description`: Description of the feature.
    -   `_key`: Sanity's unique key for array items.
-   **`galleryImages: { asset: { _ref: string; _type: string; }; alt?: string; caption?: string; _key: string; _type: string; }[]`**: An array of image objects for the project gallery.
    -   `asset`: Reference to the image asset in Sanity.
        -   `_ref`: The Sanity asset ID.
        -   `_type`: Typically "reference".
    -   `alt?`: Optional alt text for the image.
    -   `caption?`: Optional caption for the image.
    -   `_key`: Sanity's unique key.
    -   `_type`: Sanity's type for the array item, usually "image".
-   **`codeSnippet?: { code: string; language?: string; filename?: string; }`**: Optional object for showcasing a code snippet.
    -   `code`: The actual code content.
    -   `language?`: The programming language for syntax highlighting.
    -   `filename?`: An optional filename for the snippet.
-   **`challenges: PortableTextBlock[]`**: Rich text describing challenges faced and solutions.
-   **`liveDemoLink?: string`**: Optional URL to the live demo of the project.
-   **`githubRepoLink?: string`**: Optional URL to the project's GitHub repository.

## Usage

These types are crucial for:
-   Ensuring type safety when fetching and manipulating project data from Sanity.
-   Providing clear data structures for components that display project information.
-   Facilitating autocompletion and developer experience in TypeScript.

*Last Updated: 17/06/2025*
