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
      selectedItem: null,
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

  setCurrentNewsId = selectedItem => {
    this.setState({
      selectedItem: selectedItem,
    });
  };

  handleNextClick = () => {
    this.handlePageNav(1);
  };

  handleModalClick = () => {
    this.setState({
      selectedItem: null,
    });
  };

  render() {
    const { currentPageNumber, isLoading, selectedItem } = this.state;

    return (
      <div className="NewsList">
        <Pagination
          handlePrevClick={this.handlePrevClick}
          handleNextClick={this.handleNextClick}
          currentPageNumber={currentPageNumber}
        />
        {isLoading && <Loader width="80px" height="80px" />}

        {
          <ul className="NewsList__items">
            {this.state.newsIdList
              .slice(
                (currentPageNumber - 1) * constant.ITEMS_PER_PAGE,
                currentPageNumber * constant.ITEMS_PER_PAGE
              )
              .map(newsId => (
                <NewsItem
                  key={newsId}
                  id={newsId}
                  setCurrentNewsId={this.setCurrentNewsId}
                />
              ))}
          </ul>
        }
        {selectedItem ? (
          <Modal
            body={<CommentsList kids={selectedItem.kids} />}
            title={selectedItem.title}
            url={selectedItem.url}
            isVisible={true}
            handleModalClick={this.handleModalClick}
          />
        ) : null}
      </div>
    );
  }
}

export default NewsList;
