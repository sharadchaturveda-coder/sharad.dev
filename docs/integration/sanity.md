# Sanity CMS Integration

This project uses Sanity.io as a headless CMS to manage content, particularly for project details and potentially blog posts or other dynamic content.

## Client Configuration (`src/lib/sanity.ts`)

The Sanity client is configured in `src/lib/sanity.ts`.

-   **`createClient`**: Imported from `next-sanity` to initialize the client.
-   **Environment Variables**:
    -   `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID.
    -   `NEXT_PUBLIC_SANITY_DATASET`: The dataset to use (e.g., "production").
    -   `NEXT_PUBLIC_SANITY_API_VERSION`: Specifies the Sanity API version (e.g., "2023-05-03").
    -   Defaults are provided if environment variables are not set, but these should be configured in `.env.local`.
-   **`useCdn`**:
    -   Set to `typeof document !== 'undefined'`.
    -   This means the CDN is used for client-side rendering (in the browser).
    -   For server-side rendering (SSR) or static generation (SSG) during build time, direct API access is used, ensuring fresh data.

```typescript
// src/lib/sanity.ts
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: typeof document !== 'undefined',
});
```

## Image URL Builder (`src/lib/sanityImageUrl.ts`)

To display images from Sanity, an image URL builder is used.

-   **`imageUrlBuilder`**: Imported from `@sanity/image-url`.
-   **`client`**: The configured Sanity client from `src/lib/sanity.ts` is passed to the builder.
-   **`urlFor(source: SanityImageSource)`**:
    -   A utility function that takes a Sanity image source object.
    -   Returns an image URL builder instance, allowing for transformations like resizing, cropping, and format changes.
    -   `SanityImageSource` type is imported from `@sanity/image-url/lib/types/types`.

```typescript
// src/lib/sanityImageUrl.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
```

## GROQ Queries

-   Data is fetched from Sanity using GROQ (Graph-Relational Object Queries).
-   These queries are typically defined in data-fetching functions like `getProjectBySlug.ts` and `getProjects.ts` within the `src/lib/` directory.
-   Example (conceptual):
    ```groq
    *[_type == "project" && slug.current == $slug][0] {
      title,
      overview,
      techStack,
      // ... other fields
    }
    ```

## Schemas (`src/sanity/schemas/`)

-   Content models (schemas) for Sanity Studio are defined in `src/sanity/schemas/`.
-   Files like `project.ts`, `blogPost.ts` define the structure of the content types.

*Last Updated: 17/06/2025*
