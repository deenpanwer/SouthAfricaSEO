"use client";

import { FullProfile } from "../../types/profile"; // For languages type

interface ProfileLanguagesProps {
  languages?: FullProfile['languages'];
}

export const ProfileLanguages = ({ languages }: ProfileLanguagesProps) => {
  if (!languages || languages.length === 0) {
    return null;
  }
  return (
    <div className="mt-2 text-sm text-gray-700">
      <strong className="font-bold">Languages:</strong> {languages.map((lang: any) => `${lang.language} (${lang.proficiency})`).join(', ')}
      <hr className="border-gray-200 my-2" />
    </div>
  );
};