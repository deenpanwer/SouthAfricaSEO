"use client";

interface ProfileLocationProps {
  location?: string;
}

export const ProfileLocation = ({ location }: ProfileLocationProps) => {
  if (!location) {
    return null;
  }
  return (
    <div>
      <p className="text-gray-700 text-sm mb-1">Location: {location}</p>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};