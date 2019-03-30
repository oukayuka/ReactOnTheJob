/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import RepositoryForm from '../../containers/Repositories/Form';
import RepositoryResult from '../../containers/Repositories/Result';
import pages from '../../pages';
import { menuHeader } from '../common/heading';

const wrapper = css`
  margin: 2em 1em;
`;

const RepositorySearch: FC = () => (
  <div>
    <Helmet>
      <title>{pages.repositories.search.title}</title>
    </Helmet>
    <div css={wrapper}>
      <Header css={menuHeader} as="h2">
        {pages.repositories.search.title}
      </Header>
      <RepositoryForm />
      <RepositoryResult />
    </div>
  </div>
);

export default RepositorySearch;
