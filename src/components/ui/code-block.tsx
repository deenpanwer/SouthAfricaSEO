// src/components/ui/code-block.tsx
import { FC } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="relative rounded-md bg-gray-800 p-4 font-mono text-sm text-gray-50 overflow-x-auto">
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
      {/* You can add a copy button here if desired */}
    </div>
  );
};
