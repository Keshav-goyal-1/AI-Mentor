
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, className }) => {
  return (
    <div className={cn("code-block relative", className)}>
      <div className="absolute top-2 right-3 text-xs text-mentor-light bg-code px-2 py-1 rounded">
        {language}
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
