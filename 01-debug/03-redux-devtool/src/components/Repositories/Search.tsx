import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';
import RepositoryForm from '../../containers/Repositories/Form';
import RepositoryList from '../../containers/Repositories/List';
import pages from '../../pages';

import './Search.css';

const RepositorySearch: FC = () => (
  <>
    <Helmet>
      <title>{pages.repositories.search.title}</title>
    </Helmet>
    <div className="repositories">
      <Header as="h2">{pages.repositories.search.title}</Header>
      <RepositoryForm />
      <RepositoryList />
    </div>
  </>
);

export default RepositorySearch;
