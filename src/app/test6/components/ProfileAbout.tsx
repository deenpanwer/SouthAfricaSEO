"use client";

interface ProfileAboutProps {
  about?: string;
  summarySnippet?: string;
}

export const ProfileAbout = ({ about, summarySnippet }: ProfileAboutProps) => {
  const content = about || summarySnippet;
  if (!content) {
    return null;
  }
  return (
    <div>
      <p className="mt-2 mb-1 text-sm text-gray-800"><strong>About:</strong> {content}</p>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};