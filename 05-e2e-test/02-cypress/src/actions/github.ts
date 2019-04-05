import { AxiosError } from 'axios';

import * as Model from '../services/github/models';
import * as ActionType from './githubConstants';

export interface GetMembersParams {
  companyName: string;
}
interface GetMembersResult {
  users: Model.User[];
}

export const getMembers = {
  start: (params: GetMembersParams) =>
    ({
      type: ActionType.GET_MEMBERS_START,
      payload: params,
    } as const),

  succeed: (params: GetMembersParams, result: GetMembersResult) =>
    ({
      type: ActionType.GET_MEMBERS_SUCCEED,
      payload: { params, result },
    } as const),

  fail: (params: GetMembersParams, error: AxiosError) =>
    ({
      type: ActionType.GET_MEMBERS_FAIL,
      payload: { params, error },
      error: true,
    } as const),
};

export interface SearchRepositoriesParams {
  q: string;
  sort?: 'stars' | 'forks' | 'updated' | '';
}
interface SearchRepositoriesResult {
  repositories: Model.Repository[];
}

export const searchRepositories = {
  start: (params: SearchRepositoriesParams) =>
    ({
      type: ActionType.SEARCH_REPOSITORIES_START,
      payload: params,
    } as const),

  succeed: (
    params: SearchRepositoriesParams,
    result: SearchRepositoriesResult,
  ) =>
    ({
      type: ActionType.SEARCH_REPOSITORIES_SUCCEED,
      payload: { params, result },
    } as const),

  fail: (params: SearchRepositoriesParams, error: AxiosError) =>
    ({
      type: ActionType.SEARCH_REPOSITORIES_FAIL,
      payload: { params, error },
      error: true,
    } as const),
};

export type GithubAction =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>
  | ReturnType<typeof searchRepositories.start>
  | ReturnType<typeof searchRepositories.succeed>
  | ReturnType<typeof searchRepositories.fail>;
