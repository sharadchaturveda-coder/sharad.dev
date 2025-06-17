import { getAllProjects } from '@/lib/getProjects';
import ProjectCard from '@/components/ui/ProjectCard'; // Assuming this is the correct path

// Revalidate data at most every hour
export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="projects-heading">
      <header className="mb-12 text-center">
        <h1 id="projects-heading" className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          All Projects
        </h1>
      </header>

      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug.current}
              title={project.title}
              tags={project.techStack || []}
              caseStudyUrl={`/projects/${project.slug.current}`}
              imageUrl={project.galleryImages && project.galleryImages.length > 0 ? project.galleryImages[0]?.asset?._ref : undefined}
              coverEmoji={project.coverEmoji}
              coverTitle={project.coverTitle}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">No projects found.</p>
        </div>
      )}
    </div>
  );
}
