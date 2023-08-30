/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';

/**
 * test scenario for authUserReducer
 *
 *  - authUserReducer function
 *  - should return the authUser when given by SET_AUTH_USER action
 *  - should remove the authUser when given by UNSET_AUTH_USER action
 *
 */

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    /* arrange */
    const initialState = null;
    const action = { type: 'UNKNOWN' };
    /* action */
    const nextState = authUserReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    /* arrange */
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: 'token-123',
      },
    };
    /* action */
    const nextState = authUserReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should remove the authUser when given by UNSET_AUTH_USER action', () => {
    /* arrange */
    const initialState = 'token-123';
    const action = {
      type: 'UNSET_AUTH_USER',
    };
    /* action */
    const nextState = authUserReducer(initialState, action);
    /* assert */
    expect(nextState).toEqual(null);
  });
});
