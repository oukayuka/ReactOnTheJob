import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import qs from 'qs';

import { User, Repository } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
};

const createAxiosInstance = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);
  instance.interceptors.response.use(res => ({
    ...res,
    data: camelcaseKeys(res.data, { deep: true }),
  }));

  return instance;
};

export const getMembersFactory = (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  const getMembers = async (organizationName: string) => {
    try {
      const response = await instance.get(`/orgs/${organizationName}/members`);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      const members: User[] = response.data;

      return members;
    } catch (err) {
      throw err;
    }
  };

  return getMembers;
};

export const searchRepositoriesFactory = (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);

  const searchRepositories = async (
    q: string,
    sort?: 'stars' | 'forks' | 'updated' | '',
  ) => {
    try {
      const params = qs.stringify({ q, sort });
      const response = await instance.get(`/search/repositories?${params}`);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      const repositories: Repository[] = response.data.items;

      return repositories;
    } catch (err) {
      throw err;
    }
  };

  return searchRepositories;
};
