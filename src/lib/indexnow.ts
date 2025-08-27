export async function submitUrlsToIndexNow(urls: string[]) {
  const key = "2b70f05e09df481bb4cdf818a2ad4e6c";
  const host = "traconomics.com";

  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    console.warn('No URLs provided for IndexNow submission.');
    return;
  }

  const body = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log('URLs submitted successfully to IndexNow.');
    } else {
      const errorText = await response.text();
      console.error(`Failed to submit URLs to IndexNow: ${response.status} - ${errorText}`);
      throw new Error(`IndexNow submission failed: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error('An unexpected error occurred during IndexNow submission:', error);
    throw error;
  }
}
