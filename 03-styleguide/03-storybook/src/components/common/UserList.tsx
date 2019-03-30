/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { Card, Image } from 'semantic-ui-react';

import { User } from '../../services/github/models';

export interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users = [] }) => (
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
);

export default UserList;
