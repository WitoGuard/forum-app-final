import { afterEach, beforeEach, describe, vi, it, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncRegisterUser } from './action';

/**
 * skenario test
 *
 * - asyncRegisterUser thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

const fakeRegisterResponse = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const name = 'John Doe';
const email = 'john@example.com';
const password = '123456';

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._register = api.register;
  });

  afterEach(() => {
    api.register = api._register;
  });

  delete api._register;

  it('should dispatch action correctly when data fetching success', async () => {
    /* arrange */
    /* stub implementation */
    api.register = () => Promise.resolve(fakeRegisterResponse);

    /* mock dispatch */
    const dispatch = vi.fn();

    /* action */
    await asyncRegisterUser({ name, email, password })(dispatch);

    /* assert */
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    /* arrange */
    /* stub implementation */
    api.register = () => Promise.reject(fakeErrorResponse);
    /* mock dispatch */
    const dispatch = vi.fn();
    /* mock alert */
    window.alert = vi.fn();

    /* action */
    await asyncRegisterUser({ name, email, password })(dispatch);

    /* assert */
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
