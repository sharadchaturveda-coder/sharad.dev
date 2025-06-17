import { getProjectBySlug } from '@/lib/getProjectBySlug';
import { Project } from '@/lib/types'; // Assuming Project type includes all necessary fields
import { notFound } from 'next/navigation';

import ProjectDetailHeader from '@/components/project_detail/ProjectDetailHeader';
import ProjectOverviewSection from '@/components/project_detail/ProjectOverviewSection';
import MyRoleSection from '@/components/project_detail/MyRoleSection';
import TechStackSection from '@/components/project_detail/TechStackSection';
import FeaturesSection from '@/components/project_detail/FeaturesSection';
import ImageGallerySection from '@/components/project_detail/ImageGallerySection';
import CodeSnippetSection from '@/components/project_detail/CodeSnippetSection';
import ChallengesLearningsSection from '@/components/project_detail/ChallengesLearningsSection';

// Revalidate the page every 60 seconds
// export const revalidate = 60;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined } | undefined>; // Removed as unused
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  // const resolvedSearchParams = _searchParams ? await _searchParams : undefined; // Marked as unused by ESLint
  // console.log('Search Params:', resolvedSearchParams); // Make searchParams "used"
  const resolvedParams = await params;
  const project: Project | null = await getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const {
    title,
    subtitle,
    overview,
    role,
    techStack,
    features,
    galleryImages,
    codeSnippet,
    challenges,
    liveDemoLink, // Assuming these are part of the Project type
    githubRepoLink, // Assuming these are part of the Project type
  } = project;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ProjectDetailHeader 
        title={title} 
        subtitle={subtitle} 
        liveDemoLink={liveDemoLink} 
        githubRepoLink={githubRepoLink} 
      />

      <main className="space-y-12">
        <ProjectOverviewSection overview={overview} />
        <MyRoleSection role={role} />
        <TechStackSection techStack={techStack} />
        <FeaturesSection features={features} />
        <ImageGallerySection galleryImages={galleryImages} projectTitle={title} />
        <CodeSnippetSection codeSnippet={codeSnippet} />
        <ChallengesLearningsSection challenges={challenges} />
      </main>
    </div>
  );
}
