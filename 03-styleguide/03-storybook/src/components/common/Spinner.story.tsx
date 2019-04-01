/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Spinner from './Spinner';

storiesOf('Common/Spinner', module)
  .add('default', () => <Spinner />)
  .add('with custom text', () => (
    <Spinner message={text('message', 'ただいま結果を取得中です！')} />
  ));
