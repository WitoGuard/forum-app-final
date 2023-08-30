/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function addthread() {
    addThread({ title, body, category });
    navigate('/');
  }

  return (
    <>
      <h3>Buat Diskusi Baru</h3>
      <form className="thread-input">
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Judul"
          required
        />
        <input
          type="text"
          value={category}
          onChange={onCategoryChange}
          placeholder="Kategory"
        />
        <textarea type="text" value={body} onChange={onBodyChange} required />
        <button type="button" onClick={addthread}>
          Buat
        </button>
      </form>
    </>
  );
}

export default ThreadInput;

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
