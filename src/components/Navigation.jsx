/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FaRegPlusSquare,
  FaRegShareSquare,
  FaRegComments,
} from 'react-icons/fa';

function Navigation({ signOut }) {
  return (
    <div className="navigation">
      <nav className="navigation-button">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button type="button" title="Home">
            <FaRegComments />
          </button>
          <p>Threads</p>
        </Link>
        <Link to="/threads" style={{ textDecoration: 'none' }}>
          <button type="button" title="New Thread">
            <FaRegPlusSquare />
          </button>
          <p>Post Thread</p>
        </Link>
        <button
          className="sign-out"
          type="button"
          onClick={signOut}
          title="Sign-Out"
        >
          <FaRegShareSquare />
          <p className="sign-out__p">Sign out</p>
        </button>
      </nav>
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};
