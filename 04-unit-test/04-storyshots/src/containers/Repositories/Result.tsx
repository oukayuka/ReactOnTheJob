/** @jsx jsx */
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { jsx } from '@emotion/core';

import RepositoriesSearch, {
  RepositoryResultProps,
} from '../../components/Repositories/Result';
import { Repository } from '../../services/github/models';
import { GithubState } from '../../reducer';

interface StateProps {
  repositories: Repository[];
  isLoading: boolean;
}

type EnhancedRepositoryResultProps = RepositoryResultProps & StateProps;

const mapStateToProps = (state: GithubState): StateProps => ({
  repositories: state.repositories,
  isLoading: state.isLoading,
});

const RepositoryResultContainer: FC<EnhancedRepositoryResultProps> = ({
  repositories,
  isLoading,
}) => <RepositoriesSearch repositories={repositories} isLoading={isLoading} />;

export default connect(mapStateToProps)(RepositoryResultContainer);
