import React, { FC, ChangeEvent, FormEvent } from 'react';
import { Button, Input } from 'semantic-ui-react';

import { SearchRepositoriesParams } from '../../actions/github';

import './Form.css';

export type RepositoryFormValues = SearchRepositoriesParams;

export interface RepositoryFormProps {
  handleChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  values?: RepositoryFormValues;
  isLoading?: boolean;
}

const RepositoryForm: FC<RepositoryFormProps> = ({
  handleChange = () => {},
  handleSubmit = () => {},
  values = { q: '', sort: undefined },
  isLoading = false,
}) => (
  <>
    <form className="repository-form" onSubmit={handleSubmit}>
      <div className="sort-container">
        <select name="sort" className="sort-select" onChange={handleChange}>
          <option value="" className="none">
            並び順
          </option>
          <option value="">マッチ度</option>
          <option value="stars">スター数</option>
          <option value="forks">フォーク数</option>
          <option value="updated">更新日</option>
        </select>
      </div>
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
