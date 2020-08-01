import React, { Component } from 'react';

// Import Components
import NewsItem from '../NewsItem';

// Import Constants
import * as constant from '../../constants/constants';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsIdList: [],
      newsDetail: [],
      isLoading: false,
    };
  }

  fetchNews = url => {
    this.setState({ isLoading: true });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ newsIdList: response, isLoading: false });
        this.fetchNewsDetails();
      });
  };

  fetchNewsDetails = () => {
    this.state.newsIdList.slice(0, 10).forEach(newsId => {
      fetch(`${constant.STORY_PATH}${newsId}.json`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            newsDetail: [...this.state.newsDetail, response],
          });
        });
    });
  };

  componentDidMount() {
    this.fetchNews(constant.TOP_STORIES_URL);
  }

  render() {
    return (
      <div>
        {/* {`${this.state.newsDetail}`} */}
        {
          <ul>
            {this.state.newsDetail.map(news => (
              <li key={news.id}>{news.title}</li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default NewsList;
