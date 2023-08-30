import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function AddThreadPage() {
  const dispatch = useDispatch();

  /* menambahkan comment */
  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <section className="input-page">
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default AddThreadPage;
