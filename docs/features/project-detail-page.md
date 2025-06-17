# Project Detail Page

The project detail page dynamically displays information for a specific project. It utilizes Next.js dynamic routing and fetches data from Sanity CMS.

## Routing

-   The route is defined by `src/app/projects/[slug]/page.tsx`.
-   The `[slug]` part of the path is a dynamic segment.
-   Next.js uses this segment to identify which project to display. For example, `/projects/my-awesome-project` will render the page for the project with the slug "my-awesome-project".

## Data Fetching

-   Project data is fetched from Sanity CMS using the `getProjectBySlug` function located in `src/lib/getProjectBySlug.ts`.
-   This function takes the `slug` from the URL as an argument.
-   It constructs a GROQ query to retrieve the specific project document from Sanity.
-   The fetched data includes project title, description, images, technologies used, challenges, learnings, and other relevant details.

## Page Structure

The `page.tsx` component in `src/app/projects/[slug]/` is responsible for:
1.  Receiving the `slug` parameter.
2.  Calling `getProjectBySlug` to fetch project data.
3.  Passing the fetched data to various sub-components that render different sections of the page (e.g., `ProjectDetailHeader`, `FeaturesSection`, `TechStackSection`).
4.  Handling cases where a project with the given slug is not found (e.g., displaying a 404 page or a custom message).

## Key Components

-   `src/app/projects/[slug]/page.tsx`: The main page component.
-   `src/components/project_detail/`: Contains components specifically designed for rendering sections of the project detail page, such as:
    -   `ProjectDetailHeader.tsx`
    -   `ProjectOverviewSection.tsx`
    -   `TechStackSection.tsx`
    -   `FeaturesSection.tsx`
    -   `ChallengesLearningsSection.tsx`
    -   `ImageGallerySection.tsx`
    -   `CodeSnippetSection.tsx` (if applicable)
    -   `MyRoleSection.tsx` (if applicable)

## Data Flow

1.  User navigates to `/projects/[some-slug]`.
2.  Next.js identifies the dynamic route and extracts the `slug`.
3.  The `page.tsx` component receives the `slug`.
4.  `getProjectBySlug(slug)` is called.
5.  A GROQ query is sent to Sanity.
6.  Sanity returns the project data.
7.  The `page.tsx` component renders, passing data to its child components.

*Last Updated: 17/06/2025*
