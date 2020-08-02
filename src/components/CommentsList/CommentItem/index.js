import React, { Component } from 'react';

import './style.css';
export default class CommentItem extends Component {
  render() {
    return (
      <div className="CommentItem">
        <p
          className="comment__text"
          dangerouslySetInnerHTML={{ __html: this.props.text }}
        ></p>
        {this.props.kids}
      </div>
    );
  }
}
