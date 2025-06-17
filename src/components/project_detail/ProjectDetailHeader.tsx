import Link from 'next/link';
import React from 'react';

type ProjectDetailHeaderProps = {
  title: string;
  subtitle: string;
  liveDemoLink?: string; // Optional
  githubRepoLink?: string; // Optional
};

const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({
  title,
  subtitle,
  liveDemoLink = "#", // Default to # if not provided
  githubRepoLink = "#", // Default to # if not provided
}) => {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6">{subtitle}</p>
      <div className="flex justify-center space-x-4">
        <Link href={liveDemoLink} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out">
          Live Demo
        </Link>
        <Link href={githubRepoLink} className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out">
          GitHub Repo
        </Link>
      </div>
    </header>
  );
};

export default ProjectDetailHeader;
