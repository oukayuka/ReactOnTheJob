import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import qs from 'qs';

import { getMembersFactory, searchRepositoriesFactory } from './api';
import userData from './__mocks__/users.json';
import repoData from './__mocks__/repositories.json';

describe('GitHub API handlers', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  describe('Getting organization members', () => {
    it('should succeed', async () => {
      const companyName = 'facebook';
      mock.onGet(`/orgs/${companyName}/members`).reply(200, userData);

      const getMembers = getMembersFactory();
      const members = await getMembers(companyName);

      expect(members[0].login).toBe(userData[0].login);
    });

    it('should fail with nonexistent name', async () => {
      const companyName = 'facebook';
      mock.onGet(`/${companyName}/members`).reply(
        404,
        JSON.parse(`
          {
            "message": "Not Found",
            "documentation_url": "https://developer.github.com/v3/orgs/members/#members-list"
          }
        `),
      );

      try {
        const getMembers = getMembersFactory();
        await getMembers(companyName);
      } catch (err) {
        expect(err.response.status).toBe(404);
      }
    });
  });

  describe('Searching repositories', () => {
    const q = 'redux';
    const sort = 'stars';
    const params = qs.stringify({ q, sort });

    it('should succeed', async () => {
      mock
        .onGet(`/search/repositories?${params}`)
        .reply(200, { items: repoData });

      const searchRepositories = searchRepositoriesFactory();
      const repos = await searchRepositories(q, sort);

      expect(repos[0].id).toBe(repoData[0].id);
    });

    it('should fail with server error', async () => {
      mock
        .onGet(`/search/repositories?${params}`)
        .reply(500, 'Internal Server Error');

      try {
        const searchRepositories = searchRepositoriesFactory();
        await searchRepositories(q, sort);
      } catch (err) {
        expect(err.response.status).toBe(500);
      }
    });
  });
});
