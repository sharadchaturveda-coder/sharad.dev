import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using Next.js Image component for optimization

interface ProjectCardProps {
  title: string;
  tags: string[];
  imageUrl: string;
  caseStudyUrl: string;
  emoji: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tags, imageUrl, caseStudyUrl, emoji }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
      <div className="relative h-56 w-full">
        {/* Placeholder for image - In a real scenario, use Next/Image */}
        {/* <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" /> */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-4xl">{emoji}</span>
        </div>
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
        <Link href={caseStudyUrl} legacyBehavior>
          <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            View Case Study &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
