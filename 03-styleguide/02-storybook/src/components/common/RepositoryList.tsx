/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Card, Icon, Image } from 'semantic-ui-react';
import { format, parse } from 'date-fns';

import { Repository } from '../../services/github/models';

const stats = css`
  margin-right: 1em;
`;

export interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: FC<RepositoryListProps> = ({ repositories = [] }) => (
  <Card.Group>
    {repositories.map(repo => (
      <Card key={repo.id} href={repo.htmlUrl} target="_blank">
        <Card.Content>
          <Image floated="right" size="mini" src={repo.owner.avatarUrl} />
          <Card.Header>{repo.name}</Card.Header>
          <Card.Meta>
            updated: {format(parse(repo.updatedAt), 'YYYY/MM/DD')}
          </Card.Meta>
          <Card.Description>{repo.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span css={stats}>
            <Icon name="star" />
            {repo.stargazersCount}
          </span>
          <span css={stats}>
            <Icon name="fork" />
            {repo.forksCount}
          </span>
          <span css={stats}>
            <Icon name="eye" />
            {repo.watchersCount}
          </span>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default RepositoryList;
