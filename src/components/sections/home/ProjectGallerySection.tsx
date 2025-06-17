import React from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import { getFeaturedProjects } from '@/lib/getProjects';
import type { Project } from '@/lib/types'; // Ensure Project type is imported

const ProjectGallerySection = async () => {
  const projects: Project[] = await getFeaturedProjects();

  if (!projects || projects.length === 0) {
    // It's good practice to provide some feedback or a placeholder
    // For now, returning null as per original logic if build expects it.
    console.log('No featured projects found or an error occurred fetching them.');
    return null;
  }

  return (
    <section
      aria-label="Featured projects"
      className="px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-semibold md:text-3xl">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            // Basic check for imageUrl from galleryImages
            const imageUrl = project.galleryImages && project.galleryImages.length > 0 && project.galleryImages[0].asset?._ref
              ? project.galleryImages[0].asset._ref
              : '/placeholder.png'; // Fallback image

            return (
              <ProjectCard
                key={project.slug.current}
                slug={project.slug.current}
                title={project.title}
                description={project.subtitle || 'No description available.'} // Use subtitle, provide fallback
                imageUrl={imageUrl}
                tags={project.techStack || []} // Use techStack, provide fallback
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;
