# Portfolio Website

This project is a personal portfolio website built with Next.js, TypeScript, and Sanity CMS. It showcases projects, skills, and provides a way to get in touch.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd sharad.dev
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    Or if you use yarn:
    ```bash
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your Sanity project ID and dataset:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
    NEXT_PUBLIC_SANITY_DATASET="your_dataset_name"
    # Add other environment variables as needed
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

```
sharad.dev/
├── .next/            # Next.js build output
├── public/           # Static assets (images, fonts, etc.)
├── src/              # Source code
│   ├── app/          # Next.js App Router (pages, layouts)
│   │   ├── (pages)/  # Route groups for main pages
│   │   └── projects/
│   │       └── [slug]/ # Dynamic route for project details
│   ├── components/   # Reusable React components
│   │   ├── layout/   # Layout components (Header, Footer)
│   │   ├── project_detail/ # Components specific to project detail page
│   │   ├── sections/ # Page-level section components
│   │   └── ui/       # Basic UI elements (cards, icons)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions, Sanity client, type definitions
│   ├── sanity/       # Sanity.io configuration and schemas
│   │   └── schemas/  # Content type schemas for Sanity Studio
│   └── types/        # Global TypeScript type definitions (if any, prefer lib/types.ts)
├── docs/             # Project documentation
├── .gitignore        # Files and directories to ignore by Git
├── eslint.config.mjs # ESLint configuration
├── next.config.ts    # Next.js configuration
├── package.json      # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── README.md         # This file
└── tsconfig.json     # TypeScript configuration
```

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

*Last Updated: 17/06/2025*
