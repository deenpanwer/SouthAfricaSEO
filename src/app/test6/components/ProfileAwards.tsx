"use client";

import { FullProfile } from "../../types/profile"; // For awards type

interface ProfileAwardsProps {
  awards?: FullProfile['awards'];
}

export const ProfileAwards = ({ awards }: ProfileAwardsProps) => {
  if (!awards || awards.length === 0) {
    return null;
  }
  return (
    <div className="mt-2">
      <strong className="block mb-1 font-bold">Awards:</strong>
      <ul className="list-none p-0">
        {awards.map((award, index) => (
          <li key={index} className="mb-1 text-sm text-gray-700">
            {award.title} from {award.issuer}
          </li>
        ))}
      </ul>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};