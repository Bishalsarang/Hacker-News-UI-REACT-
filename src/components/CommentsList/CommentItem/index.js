import React from 'react';

import './style.css';

const CommentItem = props => {
  const { by, text, kids } = props;
  return (
    <div className="CommentItem">
      <div className="Info">
        <p className="author">@{by}</p>
        <blockquote
          className="comment__text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></blockquote>
      </div>

      {kids}
    </div>
  );
};

export default CommentItem;
