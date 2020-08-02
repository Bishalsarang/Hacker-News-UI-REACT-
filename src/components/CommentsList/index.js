import React, { Component } from 'react';
import API from '../../services/API';

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

  fetchComments = () => {
    this.state.kids.forEach(kid => {
      API.fetchUrl(
        `https://hacker-news.firebaseio.com/v0/item/${kid}.json`
      ).then(response => {
        this.setState({
          comments: [...this.state.comments, response],
        });
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="CommentsList">
        {this.state.comments.map(comment => (
          <div>
            <p dangerouslySetInnerHTML={{ __html: comment.text }} />

            <CommentsList kids={comment.kids || []} />
          </div>
        ))}
      </div>
    );
  }
}

export default CommentsList;
