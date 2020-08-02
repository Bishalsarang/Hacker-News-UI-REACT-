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
      return <div>Loading</div>;
    }
    const { url, title, by, kids, score } = this.state.detail;
    return (
      <li className="NewsItem">
        <a href={url}>{title}</a>
        <div className="NewsItem__info">
          <span className="NewsItem__author">by: {by}</span>
          <button
            className="NewsItem__comments"
            onClick={this.handleCommentClick}
          >
            {kids ? `Comment(${kids.length})` : 0}
          </button>
          <span className="NewsItem__points">Points({score})</span>
        </div>
      </li>
    );
  }
}

export default NewsItem;
