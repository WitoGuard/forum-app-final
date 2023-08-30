/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import PropTypes from 'prop-types';
import postedAt from '../utils';

function CommentItem({ content, createdAt, upVotesBy, downVotesBy, owner }) {
  return (
    <div className="comment-item">
      <div className="comment-item__info">
        <div>
          <img src={owner.avatar} alt={owner.name} />
          <span> {owner.name}</span>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <p className="comment-item__content">{content}</p>
      <footer className="comment-item__vote">
        <FiThumbsUp />
        <p>{upVotesBy.length} </p>

        <FiThumbsDown />
        <p> {downVotesBy.length}</p>
      </footer>
    </div>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
};
