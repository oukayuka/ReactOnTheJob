/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs';

import Form from './Form';

storiesOf('Repository Search/Form', module).add('default', () => (
  <Form
    values={object('value', { q: '', sort: '' } as const)}
    isLoading={boolean('isLoading', false)}
  />
));
