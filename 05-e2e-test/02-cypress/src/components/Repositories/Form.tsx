/** @jsx jsx */
import React, { FC, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Button, Dropdown, Input } from 'semantic-ui-react';

import { SearchRepositoriesParams } from '../../actions/github';

const form = css`
  margin: 2em 0 4em;
  text-align: center;
`;
const input = css`
  margin: 0.5em;
  width: 30em;
`;

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
    'data-testid': 'match',
  },
  {
    key: 'stars',
    text: 'スター数',
    value: 'stars',
    'data-testid': 'stars',
  },
  {
    key: 'forks',
    text: 'フォーク数',
    value: 'forks',
    'data-testid': 'forks',
  },
  {
    key: 'updated',
    text: '更新日',
    value: 'updated',
    'data-testid': 'updated',
  },
];

const RepositoryForm: FC<RepositoryFormProps> = ({
  handleChange = () => {},
  handleSubmit = () => {},
  values = { q: '', sort: undefined },
  isLoading = false,
}) => (
  <div>
    <form css={form} onSubmit={handleSubmit}>
      <Dropdown
        name="sort"
        onChange={(event, data) => handleChange('sort', String(data.value))}
        value={values.sort}
        options={sortOptions}
        placeholder="並び順"
        data-testid="sort-select"
        selection
      />
      <Input
        placeholder="リポジトリ名を入力..."
        type="text"
        name="q"
        onChange={(event, data) => handleChange('q', String(data.value))}
        value={values.q}
        css={input}
        data-testid="q-input"
      />
      <Button
        type="submit"
        disabled={!values.q.length || isLoading}
        primary
        data-testid="search-button"
      >
        検索
      </Button>
    </form>
  </div>
);

export default RepositoryForm;
