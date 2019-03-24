import React, { FC, ChangeEvent, FormEvent } from 'react';
import { Button, Input } from 'semantic-ui-react';

import { SearchRepositoriesParams } from '../../actions/github';

import './Form.css';

export type RepositoryFormValues = SearchRepositoriesParams;

export interface RepositoryFormProps {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  values?: { q: string; sort: 'stars' | 'forks' | 'updated' | null };
  isLoading?: boolean;
}

const RepositoryForm: FC<RepositoryFormProps> = ({
  handleChange = () => {},
  handleSubmit = () => {},
  values = { q: '', sort: null },
  isLoading = false,
}) => (
  <>
    <form className="repository-form" onSubmit={handleSubmit}>
      <Input
        placeholder="リポジトリ名を入力..."
        type="text"
        name="q"
        onChange={handleChange}
        value={values.q}
      />
      <Button
        type="submit"
        disabled={!values.q.length || isLoading}
        primary
        data-test="exec-search"
      >
        検索
      </Button>
    </form>
  </>
);

export default RepositoryForm;
