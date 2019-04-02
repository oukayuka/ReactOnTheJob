import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/githubConstants';
import { getMembers, searchRepositories } from '../actions/github';
import * as api from '../services/github/api';

const getMembersHandler = api.getMembersFactory();
const searchRepositoriesHandler = api.searchRepositoriesFactory();

function* runGetMembers(
  handler: typeof getMembersHandler,
  action: ReturnType<typeof getMembers.start>,
) {
  const { companyName } = action.payload;

  try {
    const users = yield call(handler, companyName);

    yield put(getMembers.succeed(action.payload, { users }));
  } catch (error) {
    yield put(getMembers.fail(action.payload, error));
  }
}

export function* watchGetMembers(handler: typeof getMembersHandler) {
  yield takeLatest(Action.GET_MEMBERS_START, runGetMembers, handler);
}

function* runSearchRepositories(
  handler: typeof searchRepositoriesHandler,
  action: ReturnType<typeof searchRepositories.start>,
) {
  const { q, sort } = action.payload;

  try {
    const repositories = yield call(handler, q, sort);

    yield put(searchRepositories.succeed(action.payload, { repositories }));
  } catch (error) {
    yield put(searchRepositories.fail(action.payload, error));
  }
}

export function* watchSearchRepositories(
  handler: typeof searchRepositoriesHandler,
) {
  yield takeLatest(
    Action.SEARCH_REPOSITORIES_START,
    runSearchRepositories,
    handler,
  );
}

export default function* rootSaga() {
  yield all([
    fork(watchGetMembers, getMembersHandler),
    fork(watchSearchRepositories, searchRepositoriesHandler),
  ]);
}
