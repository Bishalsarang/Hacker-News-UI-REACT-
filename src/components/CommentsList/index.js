import React, { Component } from 'react';

import CommentItem from './CommentItem';
import API from '../../services/API';

import './style.css';
class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kids: this.props.kids,
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    let promises = this.state.kids.map(comment =>
      API.fetchUrl(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`)
    );

    Promise.all(promises).then(comments => {
      this.setState({
        comments: comments,
      });
    });
  };

  render() {
    return (
      <div className="CommentsList">
        {this.state.comments.map(comment => (
          <CommentItem
            by={comment.by}
            text={comment.text}
            kids={comment.kids ? <CommentsList kids={comment.kids} /> : null}
          />
        ))}
      </div>
    );
  }
}

export default CommentsList;
