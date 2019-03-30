/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, object, withKnobs } from '@storybook/addon-knobs';

import Form from './Form';

const match = '';

storiesOf('Repository Search/Form', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Form
      values={object('value', { q: '', sort: match as typeof match })}
      isLoading={boolean('isLoading', false)}
    />
  ));
