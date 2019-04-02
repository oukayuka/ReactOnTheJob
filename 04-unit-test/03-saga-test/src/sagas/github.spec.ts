import { expectSaga } from 'redux-saga-test-plan';
import { AxiosError } from 'axios';
import camelcaseKeys from 'camelcase-keys';

import reducer, { initialState } from '../reducer';
import { watchGetMembers, watchSearchRepositories } from './github';
import * as actions from '../actions/github';
import userData from '../services/github/__mocks__/users.json';
import repoData from '../services/github/__mocks__/repositories.json';

describe("GitHub API sagas' saga", () => {
  describe("Get members' saga", () => {
    const handler = jest.fn();
    const companyName = 'facebook';
    const params = { companyName };
    const users = camelcaseKeys(userData, { deep: true });

    it('should succeeded', async () => {
      handler.mockReturnValue(users);

      return expectSaga(watchGetMembers, handler)
        .withReducer(reducer as any)
        .put(actions.getMembers.succeed(params, { users }))
        .dispatch(actions.getMembers.start(params))
        .hasFinalState({ ...initialState, users })
        .silentRun(1);
    });

    it('should failed with nonexistent name', async () => {
      const error = {
        message: 'Not Found',
        response: {
          status: 404,
          statusText: 'Not Found',
        },
      };
      handler.mockRejectedValue(error);

      return expectSaga(watchGetMembers, handler)
        .withReducer(reducer as any)
        .put(actions.getMembers.fail(params, error as AxiosError))
        .dispatch(actions.getMembers.start(params))
        .hasFinalState({ ...initialState, error })
        .silentRun(1);
    });
  });

  describe('Search repositories saga', () => {
    const handler = jest.fn();
    const stars = 'stars';
    const params = { q: 'redux', sort: stars as typeof stars };
    const repositories = camelcaseKeys(repoData, { deep: true });

    it('should succeeded', async () => {
      handler.mockReturnValue(repositories);

      return expectSaga(watchSearchRepositories, handler)
        .withReducer(reducer as any)
        .put(actions.searchRepositories.succeed(params, { repositories }))
        .dispatch(actions.searchRepositories.start(params))
        .hasFinalState({ ...initialState, repositories })
        .silentRun(1);
    });

    it('should failed with server error', async () => {
      const error = {
        message: 'Intrernal Server Error',
        response: {
          status: 500,
          statusText: 'Intrernal Server Error',
        },
      };
      handler.mockRejectedValue(error);

      return expectSaga(watchSearchRepositories, handler)
        .withReducer(reducer as any)
        .put(actions.searchRepositories.fail(params, error as AxiosError))
        .dispatch(actions.searchRepositories.start(params))
        .hasFinalState({ ...initialState, error })
        .silentRun(1);
    });
  });
});
