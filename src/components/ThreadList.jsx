/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div className="thread-list">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}

export default ThreadList;

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
