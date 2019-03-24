import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import CompanyMembers, {
  CompanyMembersProps,
} from '../../components/Companies/Members';
import { User } from '../../services/github/models';
import { GithubState } from '../../reducer';
import { getMembers } from '../../actions/github';

interface StateProps {
  users: User[];
  isLoading?: boolean;
}

interface DispatchProps {
  getMembersStart: (companyName: string) => void;
}

type EnhancedCompanyMembersProps = CompanyMembersProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ companyName: string }>;

const mapStateToProps = (state: GithubState): StateProps => ({
  users: state.users,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getMembersStart: (companyName: string) =>
        getMembers.start({ companyName }),
    },
    dispatch,
  );

const CompanyMembersContainer: FC<EnhancedCompanyMembersProps> = ({
  users,
  isLoading,
  getMembersStart,
  match,
}) => {
  const { companyName } = match.params;

  useEffect(() => {
    getMembersStart(companyName);
  }, []);

  return (
    <CompanyMembers
      companyName={companyName}
      users={users}
      isLoading={isLoading}
    />
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CompanyMembersContainer),
);
