import React from 'react';
import CodeHighlight from '@/components/ui/CodeHighlight'; // Path updated
import type { Project } from '@/lib/types';

// Use the CodeSnippet type from the Project interface in src/lib/types.ts
// Project['codeSnippet'] is already optional, so it matches CodeSnippet | undefined
// The component prop handles null as well.
type CodeSnippetType = NonNullable<Project['codeSnippet']>;


type CodeSnippetSectionProps = {
  codeSnippet: CodeSnippetType | null | undefined;
};

const CodeSnippetSection: React.FC<CodeSnippetSectionProps> = ({ codeSnippet }) => {
  if (!codeSnippet || !codeSnippet.code) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">
        {codeSnippet.filename || 'Code Snippet'}
      </h2>
      <CodeHighlight language={codeSnippet.language || 'typescript'} code={codeSnippet.code} />
    </section>
  );
};

export default CodeSnippetSection;
