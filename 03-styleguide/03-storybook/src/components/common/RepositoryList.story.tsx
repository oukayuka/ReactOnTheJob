/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import RepositoryList from './RepositoryList';
import repositories from '../../services/github/__mocks__/repositories';

storiesOf('Common/RepositoryList', module).add('with data', () => (
  <RepositoryList repositories={object('repositories', repositories)} />
));
