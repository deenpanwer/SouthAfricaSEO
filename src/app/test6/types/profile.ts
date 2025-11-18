export interface ProfileMetadata {
  id: string; // Unique identifier for the profile
  name: string;
  headline: string; // e.g., "Software Engineer at Google"
  profileUrl: string; // The direct URL to the LinkedIn profile
  summarySnippet?: string; // A short, relevant snippet from the profile for search results
  profilePictureThumbnailUrl?: string; // Small image for display next to the link
  location?: string;
  currentCompany?: string;
}

export interface FullProfile extends ProfileMetadata {
  about?: string; // Full "About" section
  job_title?: string; // Current job title
  company_name?: string; // Current company name
  experience?: Array<{
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }>;
  education?: Array<{
    degree: string;
    fieldOfStudy: string;
    institution: string;
    startDate: string;
    endDate?: string;
  }>;
  skills?: string[];
  certifications?: Array<{
    name: string;
    authority: string;
    url?: string;
  }>;
  // Add other detailed fields as needed based on Coresignal's actual response
}
