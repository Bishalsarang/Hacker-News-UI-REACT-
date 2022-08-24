const fetchUrl = async url => {
  let response = null;
  try {
    response = await fetch(url);
    return response.json();
  } catch {
    console.log('Issue fetchingsss');
    return {};
  }
};

export default { fetchUrl };
