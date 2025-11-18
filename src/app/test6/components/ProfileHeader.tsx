"use client";

import { FullProfile } from "../../types/profile";

interface ProfileHeaderProps {
  profile: FullProfile;
}

export const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  return (
    <div className="overflow-hidden mb-4">
      {profile.profilePictureThumbnailUrl && (
        <img src={profile.profilePictureThumbnailUrl} alt={profile.name} className="w-12 h-12 float-left mr-4" />
      )}
      <div className="overflow-hidden">
        <h2 className="text-lg font-semibold mb-1">
          <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            {profile.name}
          </a>
        </h2>
        <p className="text-gray-800 text-sm mb-1">{profile.headline}</p>
        {profile.connections_count !== undefined && <p className="text-gray-700 text-sm mb-1">Connections: {profile.connections_count}</p>}
        {profile.follower_count !== undefined && <p className="text-gray-700 text-sm mb-1">Followers: {profile.follower_count}</p>}
      </div>
      <hr className="border-gray-200 my-2" />
    </div>
  );
};