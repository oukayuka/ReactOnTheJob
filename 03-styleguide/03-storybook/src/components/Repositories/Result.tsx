/** @jsx jsx */
import React, { FC } from 'react';
import { jsx } from '@emotion/core';

import RepositoryList from '../common/RepositoryList';
import Spinner from '../common/Spinner';
import { Repository } from '../../services/github/models';

export interface RepositoryResultProps {
  repositories?: Repository[];
  isLoading?: boolean;
}

const RepositoryResult: FC<RepositoryResultProps> = ({
  repositories = [],
  isLoading = false,
}) => (
  <div>
    {isLoading ? <Spinner /> : <RepositoryList repositories={repositories} />}
  </div>
);

export default RepositoryResult;
