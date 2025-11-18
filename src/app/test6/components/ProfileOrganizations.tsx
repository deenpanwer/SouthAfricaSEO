"use client";

import { FullProfile } from "../../types/profile"; // For organizations type

interface ProfileOrganizationsProps {
  organizations?: FullProfile['organizations'];
}

export const ProfileOrganizations = ({ organizations }: ProfileOrganizationsProps) => {
  if (!organizations || organizations.length === 0) {
    return null;
  }
  return (
    <div className="mt-2">
      <strong className="block mb-1 font-bold">Organizations:</strong>
      <ul className="list-none p-0">
        {organizations.map((org, index) => (
          <li key={index} className="mb-1 text-sm text-gray-700">
            {org.organization} {org.position ? `(${org.position})` : ''}
          </li>
        ))}
      </ul>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};