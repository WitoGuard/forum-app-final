/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import postedAt from '../utils';

function ThreadDetail({
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  owner,
}) {
  return (
    <div className="thread-detail">
      <p className="thread-item__category">#{category}</p>
      <article className="thread-detail__info">
        <h2>{title}</h2>
        <p>{body}</p>
      </article>
      <div className="thread-detail__detail">
        <FiThumbsUp />
        <span>{upVotesBy.length}</span>
        <FiThumbsDown />
        <span>{downVotesBy.length}</span>
        <div>
          <span>Dibuat oleh: </span>
          <img src={owner.avatar} alt={owner.name} />
          <span>{owner.name}</span>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

export default ThreadDetail;

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
};
