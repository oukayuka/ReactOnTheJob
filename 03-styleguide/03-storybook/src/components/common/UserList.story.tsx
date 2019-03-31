/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import UserList from './UserList';
import users from '../../services/github/__mocks__/users';

storiesOf('Common/UserList', module).add('with data', () => (
  <UserList users={object('users', users)} />
));
