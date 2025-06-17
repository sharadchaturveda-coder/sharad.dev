import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanityImageUrl'; // Assuming urlFor is correctly imported
import type { Project } from '@/lib/types';

// Use the GalleryImage type from the Project interface in src/lib/types.ts
type GalleryImage = Project['galleryImages'][number];

type ImageGallerySectionProps = {
  galleryImages: GalleryImage[] | null | undefined;
  projectTitle: string; // For fallback alt text
};

const ImageGallerySection: React.FC<ImageGallerySectionProps> = ({ galleryImages, projectTitle }) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Image Gallery</h2>
      {galleryImages && galleryImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image._key} className="bg-gray-100 rounded-lg overflow-hidden">
              {image.asset?._ref && (
                <Image
                  src={urlFor(image.asset).width(600).height(400).fit('crop').url()}
                  alt={image.alt || projectTitle}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              )}
              {image.caption && <p className="text-sm text-gray-600 p-2">{image.caption}</p>}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
          No images available for this project.
        </div>
      )}
    </section>
  );
};

export default ImageGallerySection;
