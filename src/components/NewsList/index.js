import React, { Component } from 'react';

// Import Components
import NewsItem from './NewsItem';
import Pagination from './Pagination';

import API from '../../services/API';

// Import Constants
import * as constant from '../../constants/constants';

// Import Styles
import './style.css';

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsIdList: [],
      newsDetail: [],
      isLoading: false,
      currentPageNumber: this.props.pageNumber || 1,
    };
  }

  fetchNews = () => {
    this.setState({ isLoading: true });

    // After NewsID is fetched , set state
    API.fetchNews(constant.TOP_STORIES_URL).then(newsIdList => {
      this.setState({ newsIdList: newsIdList });
      this.fetchNewsDetails();
    });
  };

  fetchNewsDetails = () => {
    const start = (this.state.currentPageNumber - 1) * constant.ITEMS_PER_PAGE;
    const end = this.state.currentPageNumber * constant.ITEMS_PER_PAGE;
    console.log(start, end);
    this.state.newsIdList.slice(start, end).forEach(newsId => {
      API.fetchUrl(`${constant.STORY_PATH}${newsId}.json`).then(detail => {
        this.setState({
          newsDetail: [...this.state.newsDetail, detail],
        });
      });
    });

    this.setState({
      isLoading: false,
    });
  };

  componentDidMount() {
    this.fetchNews();
  }

  handlePrevClick = () => {
    if (this.state.currentPageNumber >= 2) {
      this.setState(
        {
          currentPageNumber: this.state.currentPageNumber - 1,
          newsDetail: [],
        },
        this.fetchNewsDetails()
      );
    }
  };

  handleNextClick = () => {
    this.setState(
      {
        currentPageNumber: this.state.currentPageNumber + 1,
        newsDetail: [],
      },
      this.fetchNewsDetails()
    );
  };

  render() {
    return (
      <div className="NewsList">
        {this.state.isLoading && <div className="loader"></div>}
        {<h3>Page{this.state.currentPageNumber}</h3>}
        {
          <ul>
            {this.state.newsDetail.map(news => (
              <NewsItem key={news.id} detail={news} />
            ))}
          </ul>
        }
        <Pagination
          handlePrevClick={this.handlePrevClick}
          handleNextClick={this.handleNextClick}
        />
      </div>
    );
  }
}

export default NewsList;
