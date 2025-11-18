"use client";

import { FullProfile } from "../../types/profile"; // For Education type

interface ProfileEducationProps {
  education?: FullProfile['education'];
}

export const ProfileEducation = ({ education }: ProfileEducationProps) => {
  if (!education || education.length === 0) {
    return null;
  }
  return (
    <div className="mt-2">
      <strong className="block mb-1 font-bold">Education:</strong>
      <ul className="list-none p-0">
        {education.map((edu, index) => (
          <li key={index} className="mb-1 text-sm text-gray-700">
            {edu.degree} {edu.fieldOfStudy ? `(${edu.fieldOfStudy})` : ''} from {edu.institution} ({edu.startDate} - {edu.endDate || 'Present'})
          </li>
        ))}
      </ul>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};
