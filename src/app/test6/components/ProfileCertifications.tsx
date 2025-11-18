"use client";

import { FullProfile } from "../../types/profile"; // For certifications type

interface ProfileCertificationsProps {
  certifications?: FullProfile['certifications'];
}

export const ProfileCertifications = ({ certifications }: ProfileCertificationsProps) => {
  if (!certifications || certifications.length === 0) {
    return null;
  }
  return (
    <div className="mt-2">
      <strong className="block mb-1 font-bold">Certifications:</strong>
      <ul className="list-none p-0">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-1 text-sm text-gray-700">
            {cert.name} ({cert.authority})
          </li>
        ))}
      </ul>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};