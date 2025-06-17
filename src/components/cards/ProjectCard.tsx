import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using next/image for optimization

export interface ProjectCardProps { // Added export
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  imageUrl,
  tags,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`View project: ${title}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow transition-all duration-300 hover:shadow-lg"
      legacyBehavior>
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic responsive sizes, can be tuned
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-bold md:text-xl">{title}</h3>
        <p className="mb-2 text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto pt-2"> 
          {/* mt-auto pushes tags to the bottom if card height varies due to description length before clamp */}
          {tags.map((tag) => (
            <span
              key={tag}
              className="mb-2 mr-2 inline-block rounded bg-gray-200 px-2 py-1 text-xs text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
