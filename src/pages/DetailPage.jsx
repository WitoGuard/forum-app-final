/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
} from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';

function DetailPage() {
  const { id } = useParams();

  const threadDetail = useSelector((states) => states.threadDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch, id]);

  if (!threadDetail) {
    return null;
  }

  /* menambahkan comment */
  const onAddComment = (content) => {
    dispatch(asyncAddComment({ id, content }));
  };

  return (
    <section className="detail-page">
      <ThreadDetail {...threadDetail} />
      <CommentInput addComment={onAddComment} />
      <CommentList comments={threadDetail.comments} />
    </section>
  );
}

export default DetailPage;
