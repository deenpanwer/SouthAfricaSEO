"use client";

import { FullProfile } from "../../types/profile"; // For activity type

interface ProfileActivityProps {
  activity?: FullProfile['activity'];
}

export const ProfileActivity = ({ activity }: ProfileActivityProps) => {
  if (!activity || activity.length === 0) {
    return null;
  }
  return (
    <div className="mt-2">
      <strong className="block mb-1 font-bold">Recent Activity:</strong>
      <ul className="list-none p-0">
        {activity.map((act, index) => (
          <li key={index} className="mb-1 text-sm text-gray-700">
            <a href={act.activity_url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              {act.title || act.action}
            </a>
          </li>
        ))}
      </ul>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};