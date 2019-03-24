import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import pages from './pages';
import Home from './components/Home';
import Companies from './components/Companies';
import Members from './containers/Companies/Members';

import './App.css';

const title = 'GitHub API デモアプリ';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>

    <header className="App-header">
      <h1>{title}</h1>
    </header>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path={pages.companies.members.path} component={Members} />
      <Route path={pages.companies.index.path} component={Companies} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
