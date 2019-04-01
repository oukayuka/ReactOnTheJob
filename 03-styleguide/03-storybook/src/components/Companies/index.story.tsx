/** @jsx jsx */
import { BrowserRouter } from 'react-router-dom';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import Companies from './index';

const companies = ['google', 'apple', 'amazon', 'microsoft', 'twitter'];

storiesOf('Companies/index', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => <Companies />)
  .add('with data', () => (
    <Companies companies={array('companies', companies)} />
  ));
