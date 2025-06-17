import { getProjectBySlug } from '@/lib/getProjects';
import type { Project, PortableTextBlock } from '@/lib/types'; // Assuming types are in @/lib/types
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { JSX } from 'react';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined } | undefined>;
};

// Revalidate data at most every hour
export const revalidate = 3600;

// Optional: Generate static paths for projects if you want to pre-render them at build time
// export async function generateStaticParams() {
//   // For now, we don't have getAllProjects, so this is commented out
//   // const projects = await getAllProjects(); // You'll need to implement getAllProjects
//   // return projects.map((project) => ({
//   //   slug: project.slug.current,
//   // }));
//   return [];
// }

export default async function ProjectDetailPage({ params, searchParams }: ProjectPageProps): Promise<JSX.Element> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  console.log('Search Params:', resolvedSearchParams); // "Uses" searchParams
  const resolvedParams = await params;
  const project: Project | null = await getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const {
    title,
    subtitle,
    role,
    techStack,
    galleryImages,
    overview,
    features,
    challenges,
  } = project;

  const heroImage = galleryImages && galleryImages.length > 0 ? galleryImages[0] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="project-title">
      <header className="mb-12 text-center">
        <h1 id="project-title" className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {subtitle}
          </p>
        )}
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-1">
          <span className="font-semibold">My Role:</span> {role}
        </p>
        {techStack && techStack.length > 0 && (
          <div className="mt-4" aria-label="Technologies used">
            <h2 className="sr-only">Technologies Used</h2>
            <ul className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <li key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {heroImage && heroImage.asset?._ref && (
        <section className="mb-12" aria-labelledby="project-hero-image-heading">
           <h2 id="project-hero-image-heading" className="sr-only">Project Hero Image</h2>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={heroImage.asset._ref} // Assuming _ref is a path like /images/nexus.jpg
              alt={heroImage.alt || `${title} hero image`}
              fill
              style={{ objectFit: 'cover' }}
              priority // Good for LCP
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
      )}

      {overview && overview.length > 0 && (
        <section className="mb-12 prose dark:prose-invert max-w-none" aria-labelledby="project-overview-heading">
          <h2 id="project-overview-heading" className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Overview</h2>
          <PortableText value={overview as PortableTextBlock[]} />
        </section>
      )}

      {features && features.length > 0 && (
        <section className="mb-12" aria-labelledby="project-features-heading">
          <h2 id="project-features-heading" className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {features.map((feature) => (
              <li key={feature._key || feature.title}>
                <strong>{feature.title}:</strong> {feature.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {challenges && challenges.length > 0 && (
        <section className="mb-12 prose dark:prose-invert max-w-none" aria-labelledby="project-challenges-heading">
          <h2 id="project-challenges-heading" className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Challenges & Learnings</h2>
          <PortableText value={challenges as PortableTextBlock[]} />
        </section>
      )}

      <div className="mt-16 text-center">
        <Link href="/projects" legacyBehavior>
          <a className="text-blue-600 dark:text-blue-400 hover:underline">
            &larr; Back to Projects
          </a>
        </Link>
      </div>
    </div>
  );
}
