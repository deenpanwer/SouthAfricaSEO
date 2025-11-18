"use client";

interface ProfileSkillsProps {
  skills?: string[];
}

export const ProfileSkills = ({ skills }: ProfileSkillsProps) => {
  if (!skills || skills.length === 0) {
    return null;
  }
  return (
    <div className="mt-2 text-sm text-gray-700">
      <strong className="font-bold">Skills:</strong> {skills.join(', ')}
      <hr className="border-gray-200 my-2" />
    </div>
  );
};