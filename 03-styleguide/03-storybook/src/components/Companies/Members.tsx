/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';
import { sprintf } from 'sprintf-js';

import pages from '../../pages';
import { User } from '../../services/github/models';
import Spinner from '../common/Spinner';
import UserList from '../common/UserList';

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
        {isLoading ? <Spinner /> : <UserList users={users} />}
      </div>
    </div>
  );
};

export default CompanyMembers;
