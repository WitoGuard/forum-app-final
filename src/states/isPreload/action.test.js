import { afterEach, beforeEach, describe, vi, it, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPreloadProcess, setIsPreload } from './action';
import { setAuthUser } from '../authUser/action';

/**
 * skenario test
 *
 * - asyncPreloadProcess thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and set user to null when data fetching failed
 */

const fakeProfileResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
  });

  delete api._getOwnProfile;

  it('should dispatch action correctly when data fetching success', async () => {
    /* arrange */
    /* stub implementation */
    api.getOwnProfile = () => Promise.resolve(fakeProfileResponse);
    /* mock dispatch */
    const dispatch = vi.fn();

    /* action */
    await asyncPreloadProcess()(dispatch);

    /* assert */
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUser(fakeProfileResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreload(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and set user to null when data fetching failed', async () => {
    /* arrange */
    /* stub implementation */

    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    /* mock dispatch */
    const dispatch = vi.fn();

    /* action */
    await asyncPreloadProcess()(dispatch);

    /* assert */
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUser(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreload(false));
  });
});
