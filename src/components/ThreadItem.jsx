/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaReply } from 'react-icons/fa';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import postedAt from '../utils';

function ThreadItem({
  category,
  title,
  body,
  createdAt,
  totalComments,
  id,
  user,
  upVotesBy,
  downVotesBy,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div
      className="thread-item"
      role="button"
      tabIndex={0}
      onClick={onThreadClick}
      onKeyDown={onThreadPress}
    >
      <p className="thread-item__category">#{category}</p>
      <article className="thread-item__info">
        <h2>{title}</h2>
        <p>{body}</p>
      </article>
      <div className="thread-item__detail">
        <FiThumbsUp />
        <span>{upVotesBy.length}</span>
        <FiThumbsDown />
        <span>{downVotesBy.length}</span>
        <p>
          <FaReply />
          {totalComments}
        </p>
        <p>{postedAt(createdAt)}</p>
        <span>dibuat oleh:</span>
        <img
          className="thread-item__detail-avatar"
          src={user.avatar}
          alt={user.name}
        />
        <span>
          <strong>{user.name}</strong>
        </span>
      </div>
    </div>
  );
}

export default ThreadItem;

ThreadItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};
