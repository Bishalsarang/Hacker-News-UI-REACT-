import React, { Component } from 'react';

// Import Components
import NewsItem from '../NewsItem';
import API from '../../services/API';

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

  fetchNews = () => {
    this.setState({ isLoading: true });

    // After NewsID is fetched , set state
    API.fetchNews(constant.TOP_STORIES_URL).then(newsIdList => {
      this.setState({ newsIdList: newsIdList, isLoading: false });
      this.fetchNewsDetails();
    });
  };

  fetchNewsDetails = () => {
    this.state.newsIdList.slice(0, 10).forEach(newsId => {
      API.fetchUrl(`${constant.STORY_PATH}${newsId}.json`).then(detail => {
        this.setState({
          newsDetail: [...this.state.newsDetail, detail],
        });
      });
    });
  };

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <div>
        {/* {`${this.state.newsDetail}`} */}
        {
          <ul>
            {this.state.newsDetail.map(news => (
              <li key={news.id}>
                <a href={news.url}>{news.title}</a>
                <span>{news.by}</span>
              </li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

export default NewsList;
