import fetch from 'node-fetch';

const downloadFromURL = async (url) => {
  const response = await fetch(url);
  const body = await response.text();
  const headers = await response.headers;

  return { body, headers };
};

export { downloadFromURL };
