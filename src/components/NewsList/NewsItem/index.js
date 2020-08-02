import React from 'react';

import CommentList from '../../CommentsList';

import './style.css';

const NewsItem = props => {
  const { url, title, by } = props.detail;

  return (
    <li className="NewsItem">
      <a href={url}>{title}</a>
      <span>{by}</span>
      <button>Comments</button>
      <CommentList />
    </li>
  );
};

export default NewsItem;
