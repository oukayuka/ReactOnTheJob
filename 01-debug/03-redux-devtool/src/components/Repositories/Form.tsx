import React, { FC, FormEvent } from 'react';
import { Button, Dropdown, Input } from 'semantic-ui-react';

import { SearchRepositoriesParams } from '../../actions/github';

import './Form.css';

export type RepositoryFormValues = SearchRepositoriesParams;

export interface RepositoryFormProps {
  handleChange?: (targetName: string, newValue: string) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  values?: RepositoryFormValues;
  isLoading?: boolean;
}

const sortOptions = [
  {
    key: 'match',
    text: 'マッチ度',
    value: '',
  },
  {
    key: 'stars',
    text: 'スター数',
    value: 'stars',
  },
  {
    key: 'forks',
    text: 'フォーク数',
    value: 'forks',
  },
  {
    key: 'updated',
    text: '更新日',
    value: 'updated',
  },
];

const RepositoryForm: FC<RepositoryFormProps> = ({
  handleChange = () => {},
  handleSubmit = () => {},
  values = { q: '', sort: undefined },
  isLoading = false,
}) => (
  <>
    <form className="repository-form" onSubmit={handleSubmit}>
      <Dropdown
        name="sort"
        onChange={(event, data) => handleChange('sort', String(data.value))}
        value={values.sort}
        options={sortOptions}
        placeholder="並び順"
        selection
      />
      <Input
        placeholder="リポジトリ名を入力..."
        type="text"
        name="q"
        onChange={(event, data) => handleChange('q', String(data.value))}
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
