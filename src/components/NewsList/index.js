import React, { Component } from 'react';

// Import Components
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import CommentsList from '../CommentsList';
import Modal from '../common/Modal';
import Loader from '../common/Loader';

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
      isLoading: false,
      currentPageNumber: this.props.pageNumber || 1,
    };
  }

  fetchNews = () => {
    this.setState({ isLoading: true });

    // After NewsID is fetched , set state
    API.fetchNews(constant.TOP_STORIES_URL).then(newsIdList => {
      this.setState({ newsIdList: newsIdList, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchNews();
  }

  handlePageNav = offset => {
    this.setState({
      currentPageNumber: this.state.currentPageNumber + offset,
    });
  };

  handlePrevClick = () => {
    if (this.state.currentPageNumber >= 2) {
      this.handlePageNav(-1);
    }
  };

  handleNextClick = () => {
    this.handlePageNav(1);
  };

  render() {
    return (
      <div className="NewsList">
        <Pagination
          handlePrevClick={this.handlePrevClick}
          handleNextClick={this.handleNextClick}
        />
        {this.state.isLoading && <Loader width="80px" height="80px" />}
        {<h3>Page{this.state.currentPageNumber}</h3>}
        {
          <ul className="NewsList__items">
            {this.state.newsIdList
              .slice(
                (this.state.currentPageNumber - 1) * constant.ITEMS_PER_PAGE,
                this.state.currentPageNumber * constant.ITEMS_PER_PAGE
              )
              .map(newsId => (
                <NewsItem key={newsId} id={newsId} />
              ))}
          </ul>
        }
        <Modal
          body={
            <CommentsList
              kids={[
                24027673,
                24028012,
                24027679,
                24027764,
                24027813,
                24027762,
                24028035,
              ]}
            />
          }
        />
      </div>
    );
  }
}

export default NewsList;
