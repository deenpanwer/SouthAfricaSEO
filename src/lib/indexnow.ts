

export async function submitUrlsToIndexNow(urls: string[]) {
  const key = "2b70f05e09df481bb4cdf818a2ad4e6c";
  const host = "traconomics.com";

  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return null;
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

    

    return { requestBody: body, response };

  } catch (error) {
    throw error;
  }
}


