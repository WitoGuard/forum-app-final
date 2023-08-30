/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ addComment }) {
  const [content, setContent] = useState('');

  function addcomment() {
    addComment(content);
    setContent('');
  }

  function handleChange({ target }) {
    setContent(target.value);
  }

  return (
    <section className="add-comment">
      <h3>Beri Komentar</h3>
      <div className="comment-input">
        <textarea
          type="text"
          placeholder="Apa Komentarmu terhadap topik di atas?"
          value={content}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={addcomment}>
          Kirim
        </button>
      </div>
    </section>
  );
}

export default CommentInput;

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
