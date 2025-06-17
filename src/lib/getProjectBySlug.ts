import { groq } from 'next-sanity';
import { client } from './sanity';
import { Project } from './types';

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = groq`*[_type == "project" && slug.current == $slug][0]{
    title,
    subtitle,
    slug,
    overview,
    role,
    techStack,
    features[]{
      title,
      description,
      _key
    },
    galleryImages[]{
      asset->{
        _ref,
        _type
      },
      alt,
      caption,
      _key,
      _type
    },
    codeSnippet{
      code,
      language,
      filename
    },
    challenges
  }`;

  try {
    const project = await client.fetch<Project>(query, { slug });
    return project || null;
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}
