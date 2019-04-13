/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import camelcaseKeys from 'camelcase-keys';

import UserList from './UserList';
import { User } from '../../services/github/models';
import data from '../../services/github/__mocks__/users.json';

const users = camelcaseKeys(data, { deep: true }) as User[];

storiesOf('Common/UserList', module).add('with data', () => (
  <UserList users={object('users', users)} />
));
