import React, { Component } from 'react';

import CommentItem from './CommentItem';
import API from '../../services/API';

import './style.css';
import Loader from '../common/Loader';
class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kids: this.props.kids,
      comments: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    this.setState({
      isLoading: true,
    });

    this.state.kids.map(comment =>
      API.fetchUrl(
        `https://hacker-news.firebaseio.com/v0/item/${comment}.json`
      ).then(comment => {
        this.setState({
          isLoading: false,
          comments: [...this.state.comments, comment],
        });
      })
    );

    //  let promises = this.state.kids.map(comment =>
    //    API.fetchUrl(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`)
    //  );

    //  Promise.all(promises).then(comments => {
    //    this.setState({
    //      comments: comments,
    //    });
    //  });
  };

  render() {
    if (this.state.isLoading) {
      return <Loader style={{ width: '80px', textAlign: 'center' }} />;
    }
    return (
      <div className="CommentsList">
        {this.state.comments.map(({ id, by, text, kids }) => (
          <CommentItem
            key={id}
            by={by}
            text={text}
            kids={kids ? <CommentsList kids={kids} /> : null}
          />
        ))}
      </div>
    );
  }
}

export default CommentsList;
