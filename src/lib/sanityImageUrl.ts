import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity'; // Assuming your Sanity client is exported from here
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
