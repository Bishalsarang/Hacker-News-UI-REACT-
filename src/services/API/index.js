const fetchUrl = async url => {
  let response = null;
  try {
    response = await fetch(url);
    return response.json();
  } catch {
    console.log('Unable to fetch');
    return {};
  }
};

export default { fetchUrl };
