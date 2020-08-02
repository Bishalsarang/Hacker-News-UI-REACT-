const fetchNews = async url => {
  let response = null;
  try {
    response = await fetch(url);
  } catch {
    console.error('Unable to fetch');
  }
  return response.json();
};

const fetchNewsDetail = async newsId => {
  // fetch(`${constant.STORY_PATH}${newsId}.json`)
  //   .then(response => response.json())
  //   .then(response => {
  //     this.setState({
  //       newsDetail: [...this.state.newsDetail, response],
  //     });
  //   });
};

const fetchUrl = async url => {
  let response = null;
  try {
    response = await fetch(url);
  } catch {
    console.error('Unable to fetch');
  }
  return response.json();
};

export default { fetchNews, fetchNewsDetail, fetchUrl };
