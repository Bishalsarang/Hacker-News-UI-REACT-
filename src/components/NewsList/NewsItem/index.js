import React, { Component } from 'react';

import API from '../../../services/API';
import * as constant from '../../../constants/constants';
import Loader from '../../../components/common/Loader';

import './style.css';

class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      isLoading: false,
      detail: null,
    };
  }

  handleCommentClick = () => {
    this.props.setCurrentNewsId(this.state.detail);
  };

  fetchNewsDetail = () => {
    this.setState({ isLoading: true });
    API.fetchUrl(`${constant.STORY_PATH}${this.state.id}.json`).then(response =>
      this.setState({
        isLoading: false,
        detail: response,
      })
    );
  };

  componentDidMount() {
    this.fetchNewsDetail();
  }

  render() {
    if (!this.state.detail) {
      return (
        <li className="NewsItem">
          <Loader style={{ width: '50px', textAlign: 'center' }} />
        </li>
      );
    }
    const { url, title, by, kids, score } = this.state.detail;
    return (
      <li className="NewsItem">
        <div>
          <p>
            <a href={url}>{title}</a>
          </p>
          <span className="NewsItem__author">
            <i class="fas fa-user"></i> {by}
          </span>
          <span className="NewsItem__points">
            <i class="fas fa-star"></i>({score})
          </span>
        </div>

        <div className="NewsItem__info">
          <button
            className="NewsItem__comments"
            onClick={this.handleCommentClick}
          >
            <i class="fas fa-comment-alt"></i>
            {` (${kids ? kids.length : 0})`}
          </button>
        </div>
      </li>
    );
  }
}

export default NewsItem;
