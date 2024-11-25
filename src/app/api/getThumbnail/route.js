export async function GET(request) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;
  const targetUrl = queryParams.get('url');

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: 'No URL provided' }), { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch URL' }), { status: 500 });
    }
    const html = await response.text();

    const match = html.match(/<meta property="og:image" content="(.*?)"/);
    if (match && match[1]) {
      return new Response(JSON.stringify({ thumbnail: match[1] }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'No thumbnail found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching the URL:', error);
    return new Response(JSON.stringify({ error: 'Error fetching the URL' }), { status: 500 });
  }
}
