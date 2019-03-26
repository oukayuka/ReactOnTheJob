import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

import pages from '../pages';

const Home: FC = () => (
  <>
    <List celled relaxed>
      <List.Item className="list-item">
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
      <List.Item className="list-item">
        <List.Icon name="code" size="large" verticalAlign="middle" />
        <List.Content>
          <Link to={pages.repositories.search.path}>
            {pages.repositories.search.title}
          </Link>
        </List.Content>
      </List.Item>
    </List>
  </>
);

export default Home;
