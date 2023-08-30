import { afterEach, beforeEach, describe, vi, it, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncSetAuthUser, setAuthUser } from './action';

/**
 * skenario test
 *
 * - asyncSetAuthUser thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

const fakeLoginResponse = {
  token: 'token-123',
};

const fakeProfileResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

const email = 'john@example.com';
const password = '123456';

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;
  });

  delete api._login;
  delete api._getOwnProfile;

  it('should dispatch action correctly when data fetching success', async () => {
    /* arrange */
    /* stub implementation */
    api.login = () => Promise.resolve(fakeLoginResponse);
    api.getOwnProfile = () => Promise.resolve(fakeProfileResponse);
    /* mock dispatch */
    const dispatch = vi.fn();

    /* action */
    await asyncSetAuthUser({ email, password })(dispatch);

    /* assert */
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUser(fakeProfileResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    /* arrange */
    /* stub implementation */
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    /* mock dispatch */
    const dispatch = vi.fn();
    /* mock alert */
    window.alert = vi.fn();

    /* action */
    await asyncSetAuthUser({ email, password })(dispatch);

    /* assert */
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
