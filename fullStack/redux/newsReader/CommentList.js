import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  if (comments) {
    return (
      <ul className='comments-list'>
        {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </ul>
    );
  }
  return null;
}