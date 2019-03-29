/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

import pages from '../pages';
import { listItem } from './common/list';

const Home: FC = () => (
  <div>
    <List celled relaxed>
      <List.Item css={listItem}>
        <List.Icon
          name="building outline"
          size="large"
          verticalAlign="middle"
        />
        <List.Content>
          <Link to={pages.companies.index.path}>
            {pages.companies.index.title}
          </Link>
        </List.Content>
      </List.Item>
      <List.Item css={listItem}>
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <Link to={pages.repositories.search.path}>
            {pages.repositories.search.title}
          </Link>
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default Home;
