import { NextResponse } from 'next/server';
import { FullProfile } from '../../../test6/types/profile'; // Adjust path as needed

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
  }

  const coresignalApiKey = process.env.CORESIGNAL_API_KEY;

  if (!coresignalApiKey) {
    return NextResponse.json({ error: 'Coresignal API key not configured in .env.local' }, { status: 500 });
  }

  let rawCoresignalData: any[] = [];
  let profiles: FullProfile[] = [];

  try {
    // Step 1: Search for profile IDs
    const searchRequestBody = {
      query: {
        bool: {
          should: [
            { match: { job_title: query } },
            { match: { headline: query } },
            { match: { generated_headline: query } },
            { match: { description: query } }
          ],
          minimum_should_match: 1
        }
      }
    };

    const searchResponse = await fetch('https://api.coresignal.com/cdapi/v2/employee_clean/search/es_dsl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': coresignalApiKey,
      },
      body: JSON.stringify(searchRequestBody),
    });

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      throw new Error(`Coresignal Search API error: ${searchResponse.status} - ${errorText}`);
    }

    const profileIds: number[] = await searchResponse.json();

    if (profileIds.length === 0) {
      return NextResponse.json({ profiles: [], rawCoresignalData: [] });
    }

    // Step 2: Collect full profiles for each ID
    // Limit to a reasonable number of profiles to avoid excessive API calls
    const limitedProfileIds = profileIds.slice(0, 1); // Fetch details for first 1 profile

    const collectPromises = limitedProfileIds.map(async (id: number) => {
      const collectResponse = await fetch(`https://api.coresignal.com/cdapi/v2/employee_clean/collect/${id}` , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': coresignalApiKey,
        },
      });

      if (!collectResponse.ok) {
        const errorText = await collectResponse.text();
        console.error(`Coresignal Collect API error for ID ${id}: ${collectResponse.status} - ${errorText}`);
        return null; // Return null for failed collects
      }
      return collectResponse.json();
    });

    const collectedProfiles = (await Promise.all(collectPromises)).filter(Boolean); // Filter out nulls
    rawCoresignalData = collectedProfiles; // Store raw collected data

    // Step 3: Map collected profiles to FullProfile interface
    profiles = collectedProfiles.map((source: any) => {
      const currentJobTitle = source.job_title || (source.experience && source.experience.length > 0 ? source.experience[0].title : null);
      const currentCompanyName = (source.experience && source.experience.length > 0 ? source.experience[0].company_name : null);

      return {
        id: String(source.id || source.public_profile_id || Math.random().toString()),
        name: source.full_name || `${source.name_first || ''} ${source.name_last || ''}`.trim(),
        headline: source.headline || '',
        profileUrl: source.websites_linkedin || '#',
        summarySnippet: source.description || '',
        profilePictureThumbnailUrl: source.picture_url || '',
        location: (() => {
          const rawAddress = source.location_raw_address;
          const city = source.location_city;
          const state = source.location_state;
          const country = source.location_country;

          if (rawAddress && rawAddress.trim() !== '') {
            return rawAddress;
          }

          const parts = [city, state, country].filter(Boolean);
          return parts.join(', ');
        })(),
        currentCompany: currentCompanyName || '',
        
        about: source.description || '',
        job_title: currentJobTitle || '',
        company_name: currentCompanyName || '',
        experience: source.experience?.map((exp: any) => ({
          title: exp.title || '',
          company: exp.company_name || '',
          startDate: exp.date_from || '',
          endDate: exp.date_to || '',
          description: exp.description || '',
        })) || [],
        education: source.education?.map((edu: any) => ({
          degree: edu.title || edu.major || '',
          fieldOfStudy: edu.major || '',
          institution: edu.institution_name || edu.title || '',
          startDate: String(edu.date_from || ''),
          endDate: String(edu.date_to || ''),
        })) || [],
        skills: source.skills || [],
      };
    });

    return NextResponse.json({ profiles, rawCoresignalData });

  } catch (error: any) {
    console.error('Error fetching from Coresignal:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch profiles from Coresignal' }, { status: 500 });
  }
}
