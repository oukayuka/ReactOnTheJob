/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs';

import Form from './Form';

const match = '';

storiesOf('Repository Search/Form', module).add('default', () => (
  <Form
    values={object('value', { q: '', sort: match as typeof match })}
    isLoading={boolean('isLoading', false)}
  />
));
