import React from 'react';

import CommentList from '../../CommentsList';

import './style.css';

const NewsItem = props => {
  const { url, title, by, kids, score } = props.detail;

  return (
    <li className="NewsItem">
      <a href={url}>{title}</a>
      <div className="NewsItem__info">
        <span className="NewsItem__author">{by}</span>
        <span className="NewsItem__comments">Comments({kids.length})</span>
        <span className="NewsItem__points">Points({score})</span>
      </div>

      <CommentList />
    </li>
  );
};

export default NewsItem;
