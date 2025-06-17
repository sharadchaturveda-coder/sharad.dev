import type { PortableTextBlock as SanityPortableTextBlock } from '@sanity/types';

// Use the more specific type from Sanity for Portable Text
export type PortableTextBlock = SanityPortableTextBlock;

export interface Project {
  title: string;
  subtitle: string;
  slug: {
    current: string;
    _type: string;
  };
  overview: PortableTextBlock[]; // Portable Text
  role: string;
  techStack: string[];
  features: {
    title: string;
    description: string;
    _key: string;
  }[];
  galleryImages: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
    caption?: string;
    _key: string;
    _type: string;
  }[];
  codeSnippet?: {
    code: string;
    language?: string;
    filename?: string;
  };
  challenges: PortableTextBlock[]; // Portable Text
  liveDemoLink?: string;
  githubRepoLink?: string;
  coverEmoji?: string;
  coverTitle?: string;
}
