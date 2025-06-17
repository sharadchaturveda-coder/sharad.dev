import React from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity'; // Assuming PortableTextBlock is the correct type

type ChallengesLearningsSectionProps = {
  challenges: PortableTextBlock[] | null | undefined;
};

const ChallengesLearningsSection: React.FC<ChallengesLearningsSectionProps> = ({ challenges }) => {
  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Challenges & Learnings</h2>
      <div className="prose prose-lg max-w-none text-gray-700">
        <PortableText value={challenges} />
      </div>
    </section>
  );
};

export default ChallengesLearningsSection;
