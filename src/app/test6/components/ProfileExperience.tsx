"use client";

import { FullProfile } from "../../types/profile"; // For Experience type

interface ProfileExperienceProps {
  experience?: FullProfile['experience'];
}

export const ProfileExperience = ({ experience }: ProfileExperienceProps) => {
  if (!experience || experience.length === 0) {
    return null;
  }
  return (
    <div className="mt-2">
      <strong className="block mb-1 font-bold">Experience:</strong>
      <ul className="list-none p-0">
        {experience.map((exp, index) => (
          <li key={index} className="mb-1 text-sm text-gray-700">
            {exp.title} at {exp.company} ({exp.startDate} - {exp.endDate || 'Present'})
          </li>
        ))}
      </ul>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};