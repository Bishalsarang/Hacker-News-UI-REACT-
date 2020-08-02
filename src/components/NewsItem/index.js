import React from 'react';

function NewsItem(props) {
  const { id, url, title, by } = props.detail;
  console.log(props.detail);
  return (
    <li key={id}>
      <a href={url}>{title}</a>
      <span>{by}</span>
    </li>
  );
}

export default NewsItem;
