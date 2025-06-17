import CodeHighlight from '@/components/ui/CodeHighlight';
import Link from 'next/link';

export default function NexusFlowPage() {
  const techStack = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB'];
  const codeSnippet = `
function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

greet('Nexus Flow User');
  `;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Nexus Flow AI</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">Complex Application Prototyping</p>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out">
            Live Demo
          </Link>
          <Link href="#" className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out">
            GitHub Repo
          </Link>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="space-y-12">
        {/* Project Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Project Overview</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-medium mb-2">The Challenge</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">My Role</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Highlights & Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Highlights & Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Feature A: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Feature B: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Feature C: Ut enim ad minim veniam, quis nostrud exercitation.</li>
            <li>Feature D: Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
          </ul>
        </section>

        {/* Image Gallery Placeholder */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Image Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center text-gray-500">Image 1 Placeholder</div>
            <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center text-gray-500">Image 2 Placeholder</div>
            <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center text-gray-500">Image 3 Placeholder</div>
          </div>
        </section>

        {/* Code Snippet Placeholder */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Code Snippet</h2>
          <CodeHighlight language="typescript" code={codeSnippet} />
        </section>

        {/* Challenges & Learnings */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Challenges & Learnings</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Vulputate dignissim suspendisse in est ante in nibh mauris. Viverra justo nec ultrices dui sapien eget mi proin. 
            Arcu cursus vitae congue mauris rhoncus aenean vel elit.
          </p>
        </section>
      </main>
    </div>
  );
}
