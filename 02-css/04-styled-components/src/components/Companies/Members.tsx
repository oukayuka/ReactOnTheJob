/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Card, Header, Image } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';
import { sprintf } from 'sprintf-js';

import pages from '../../pages';
import { User } from '../../services/github/models';
import Spinner from '../common/Spinner';

const members = css`
  margin: 2em 1em;
`;
const memberHeader = css`
  margin-bottom: 1.25em !important;
  text-align: center;
`;

export interface CompanyMembersProps {
  companyName: string;
  users: User[];
  isLoading?: boolean;
}

const CompanyMembers: FC<CompanyMembersProps> = ({
  companyName = '<会社名>',
  users = [],
  isLoading = false,
}) => {
  const title = sprintf(pages.companies.members.title, capitalize(companyName));

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div css={members}>
        <Header as="h2" css={memberHeader}>
          {title}
        </Header>
        {isLoading ? (
          <Spinner />
        ) : (
          <Card.Group>
            {users.map(user => (
              <Card key={user.id} href={user.htmlUrl} target="_blank">
                <Card.Content>
                  <Image floated="right" size="mini" src={user.avatarUrl} />
                  <Card.Header>{user.login}</Card.Header>
                  <Card.Meta>GitHub ID: {user.id}</Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
      </div>
    </div>
  );
};

export default CompanyMembers;
