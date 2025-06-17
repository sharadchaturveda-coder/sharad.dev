// Define a type for our skills
export interface Skill {
  name: string;
  icon?: string; // Optional: URL or path to an icon image
}

const mockSkills: Skill[] = [
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg', // Example path
  },
  {
    name: 'JavaScript',
    icon: '/icons/javascript.svg',
  },
  {
    name: 'React',
    icon: '/icons/react.svg',
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
  },
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
  },
  {
    name: 'Sanity.io',
    // icon: '/icons/sanity.svg', // Icon can be omitted
  },
  {
    name: 'Git & GitHub',
  },
];

/**
 * Fetches a list of skills.
 * In a real application, this would fetch data from a CMS, database, or API.
 * For now, it returns a hardcoded mock list of skills.
 */
export async function getSkills(): Promise<Skill[]> {
  // Simulate an API call delay
  // await new Promise(resolve => setTimeout(resolve, 100)); 
  return Promise.resolve(mockSkills);
}
