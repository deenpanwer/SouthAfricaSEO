"use client";

import { FullProfile } from "../../types/profile";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileExperience } from "./ProfileExperience";
import { ProfileEducation } from "./ProfileEducation";
import { ProfileSkills } from "./ProfileSkills";
import { ProfileLanguages } from "./ProfileLanguages";
import { ProfileCertifications } from "./ProfileCertifications";
import { ProfileOrganizations } from "./ProfileOrganizations";
import { ProfileAwards } from "./ProfileAwards";
import { ProfileActivity } from "./ProfileActivity";
import { ProfileLocation } from "./ProfileLocation";

interface ProfileCardProps {
  profile: FullProfile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  if (!profile.name && !profile.headline) {
    return null; // Filter out profiles without basic info
  }

  return (
    <div className="border border-gray-300 p-4 mb-4 bg-white">
      <ProfileHeader profile={profile} />
      <ProfileLocation location={profile.location} />
      <ProfileAbout about={profile.about} summarySnippet={profile.summarySnippet} />
      <ProfileExperience experience={profile.experience} />
      <ProfileEducation education={profile.education} />
      <ProfileSkills skills={profile.skills} />
      <ProfileLanguages languages={profile.languages} />
      <ProfileCertifications certifications={profile.certifications} />
      <ProfileOrganizations organizations={profile.organizations} />
      <ProfileAwards awards={profile.awards} />
      <ProfileActivity activity={profile.activity} />
    </div>
  );
};
