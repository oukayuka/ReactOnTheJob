/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import camelcaseKeys from 'camelcase-keys';

import RepositoryList from './RepositoryList';
import { Repository } from '../../services/github/models';
import data from '../../services/github/__mocks__/repositories.json';

const repositories: Repository[] = camelcaseKeys(data, { deep: true });

storiesOf('Common/RepositoryList', module).add('with data', () => (
  <RepositoryList repositories={object('repositories', repositories)} />
));
