const fetchNews = async url => {
  let response = null;
  try {
    response = await fetch(url);
  } catch {}
  return response.json();
};

const fetchUrl = async url => {
  let response = null;
  try {
    response = await fetch(url);
  } catch {}
  return response.json();
};

export default { fetchNews, fetchUrl };
