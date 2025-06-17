import React from 'react';
import type { Project } from '@/lib/types';

// Use the Feature type from the Project interface in src/lib/types.ts
type Feature = Project['features'][number];

type FeaturesSectionProps = {
  features: Feature[] | null | undefined;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Highlights & Features</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        {features.map((feature) => (
          <li key={feature._key}>
            <strong className="font-medium">{feature.title}:</strong> {feature.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturesSection;
