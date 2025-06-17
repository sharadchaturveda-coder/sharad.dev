interface CodeHighlightProps {
  code: string;
  language: string;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ code, language }) => {
  return (
    <div className="rounded-lg bg-gray-800 p-4 my-4 overflow-x-auto">
      <pre className={`language-${language} text-sm`}>
        <code className={`language-${language} text-white`}>
          {code.trim()}
        </code>
      </pre>
      <div className="text-xs text-gray-400 mt-2 text-right">
        Language: {language}
      </div>
    </div>
  );
};

export default CodeHighlight;
