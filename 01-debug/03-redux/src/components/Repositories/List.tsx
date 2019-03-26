import React, { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { format, parse } from 'date-fns';

import Spinner from '../common/Spinner';
import { Repository } from '../../services/github/models';

import './List.css';

export interface RepositoryListProps {
  repositories?: Repository[];
  isLoading?: boolean;
}

const RepositoryList: FC<RepositoryListProps> = ({
  repositories = [],
  isLoading = false,
}) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
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
              <span className="stats">
                <Icon name="star" />
                {repo.stargazersCount}
              </span>
              <span className="stats">
                <Icon name="fork" />
                {repo.forksCount}
              </span>
              <span className="stats">
                <Icon name="eye" />
                {repo.watchersCount}
              </span>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )}
  </>
);

export default RepositoryList;
