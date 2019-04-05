/** @jsx jsx */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import capitalize from 'lodash/capitalize';
import { Button, List } from 'semantic-ui-react';

import { listItem } from '../common/list';
import pages from '../../pages';

const linkButtons = css`
  margin-top: 4em;
`;

const givenCompanies = ['facebook', 'airbnb', 'netflix'];

const Companies: FC<{ companies?: string[] }> = ({
  companies = givenCompanies,
}) => (
  <div>
    <List celled relaxed>
      {companies.map(companyName => (
        <List.Item css={listItem} key={companyName}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <List.Content>
            <Link
              to={`/${companyName}/members`}
              data-testid={`${companyName}-page`}
            >
              {capitalize(companyName)}のメンバー
            </Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
    <div css={linkButtons}>
      <Link to={pages.index.path}>
        <Button
          content="ホーム"
          icon="home"
          labelPosition="left"
          data-testid="home-link"
        />
      </Link>
    </div>
  </div>
);

export default Companies;
