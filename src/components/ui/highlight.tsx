
import React from 'react';

type HighlightProps = {
  text: string;
  words: string[];
  className?: string;
};

export const Highlight: React.FC<HighlightProps> = ({ text, words, className }) => {
  if (!words.length) {
    return <>{text}</>;
  }

  // The regex now includes word boundaries to avoid matching substrings within words.
  const parts = text.split(new RegExp(`(\b(?:${words.join('|')})\b)`, 'gi'));

  return (
    <>
      {parts.map((part, index) =>
        words.some(word => new RegExp(`^${word}$`, 'i').test(part)) ? (
          <strong key={index} className={`font-bold text-primary ${className}`}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
};
