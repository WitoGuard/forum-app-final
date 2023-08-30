/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

/**
 * test scenario for threadDetailReducer
 *
 *  - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should remove the thread detail when given CLEAR_THREAD_DETAIL action
 *  - should add new comment when given by COMMENT_THREAD_DETAIL action
 *
 */

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    /* arrange */
    const initialState = null;
    const action = { type: 'UNKNOWN' };
    /* action */
    const nextState = threadDetailReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action ', () => {
    /* arrange */
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };
    /* action */
    const nextState = threadDetailReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should remove the thread detail when given CLEAR_THREAD_DETAIL action', () => {
    /* arrange */
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };
    /* action */
    const nextState = threadDetailReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual(null);
  });

  it('should add new comment when given by COMMENT_THREAD_DETAIL action', () => {
    /* arrange */
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'COMMENT_THREAD_DETAIL',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };
    /* action */
    const nextState = threadDetailReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });
});
