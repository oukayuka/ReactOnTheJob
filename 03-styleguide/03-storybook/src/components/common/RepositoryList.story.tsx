/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, withKnobs } from '@storybook/addon-knobs';

import RepositoryList from './RepositoryList';
import repositories from '../../services/github/__mocks__/repositories';

storiesOf('Common/RepositoryList', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('with data', () => (
    <RepositoryList repositories={object('repositories', repositories)} />
  ));
