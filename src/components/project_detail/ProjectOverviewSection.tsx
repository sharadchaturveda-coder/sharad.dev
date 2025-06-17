import React from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity'; // Assuming PortableTextBlock is the correct type

type ProjectOverviewSectionProps = {
  overview: PortableTextBlock[];
};

const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({ overview }) => {
  if (!overview || overview.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Project Overview</h2>
      <div className="prose prose-lg max-w-none text-gray-700">
        <PortableText value={overview} />
      </div>
    </section>
  );
};

export default ProjectOverviewSection;
