/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';

import Spinner from './Spinner';

storiesOf('Common/Spinner', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('default', () => <Spinner />)
  .add('with custom text', () => (
    <Spinner message={text('message', 'ただいま結果を取得中です！')} />
  ));
