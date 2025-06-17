import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

interface ProjectCardProps {
  title: string;
  tags: string[];
  caseStudyUrl: string;
  imageUrl?: string; // Added imageUrl prop
  coverEmoji?: string;
  coverTitle?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, caseStudyUrl, imageUrl, coverEmoji, coverTitle }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
      <div className="relative h-56 w-full bg-gray-200 dark:bg-gray-700">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} cover image`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (coverEmoji || coverTitle) ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {coverEmoji && (
              <div className="text-5xl text-center">{coverEmoji}</div>
            )}
            {coverTitle && (
              <div className={`text-sm text-center text-gray-500 dark:text-gray-400 ${coverEmoji ? 'mt-2' : ''} mb-2`}>{coverTitle}</div>
            )}
          </div>
        ) : (
          // Fallback if no image and no cover text/emoji
          (<div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl" role="img" aria-label="Default project icon">🖼️</span>
          </div>)
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={caseStudyUrl} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
          View Case Study &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
