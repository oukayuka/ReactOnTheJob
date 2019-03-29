import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepositoryForm, {
  RepositoryFormProps,
  RepositoryFormValues,
} from '../../components/Repositories/Form';
import { GithubState } from '../../reducer';
import { searchRepositories } from '../../actions/github';

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  searchRepositoriesStart: (params: RepositoryFormValues) => void;
}

type EnhancedRepositorySearchProps = RepositoryFormProps &
  StateProps &
  DispatchProps;

const mapStateToProps = (state: GithubState): StateProps => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      searchRepositoriesStart: params => searchRepositories.start(params),
    },
    dispatch,
  );

const RepositoryFormContainer: FC<EnhancedRepositorySearchProps> = ({
  isLoading,
  searchRepositoriesStart,
}) => {
  const [values, setValues] = useState<RepositoryFormValues>({
    q: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    event.persist();
    setValues(v => ({ ...v, [event.target.name]: event.target.value }));
    const newValues = { ...values, [event.target.name]: event.target.value };

    if (!!values.q.trim() && event.target.name === 'sort') {
      searchRepositoriesStart(newValues);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      searchRepositoriesStart(values);
    }
  };

  return (
    <RepositoryForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isLoading={isLoading}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepositoryFormContainer);
