/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentList({ comments }) {
  return (
    <section className="comment-list">
      <h4>{`Komentar (${comments.length})`}</h4>
      <div className="comment-list__item">
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
}

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
