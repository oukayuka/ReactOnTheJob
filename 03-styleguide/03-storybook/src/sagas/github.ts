import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/githubConstants';
import { getMembers, searchRepositories } from '../actions/github';
import * as api from '../services/github/api';

function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload;

  try {
    const handler = api.getMembersFactory();
    const users = yield call(handler, companyName);

    yield put(getMembers.succeed(action.payload, { users }));
  } catch (error) {
    yield put(getMembers.fail(action.payload, error));
  }
}

export function* watchGetMembers() {
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers);
}

function* runSearchRepositories(
  action: ReturnType<typeof searchRepositories.start>,
) {
  const { q, sort } = action.payload;

  try {
    const handler = api.searchRepositoriesFactory();
    const repositories = yield call(handler, q, sort);

    yield put(searchRepositories.succeed(action.payload, { repositories }));
  } catch (error) {
    yield put(searchRepositories.fail(action.payload, error));
  }
}

export function* watchSearchRepositories() {
  yield takeLatest(Action.SEARCH_REPOSITORIES_START, runSearchRepositories);
}

export default function* rootSaga() {
  yield all([fork(watchGetMembers), fork(watchSearchRepositories)]);
}
