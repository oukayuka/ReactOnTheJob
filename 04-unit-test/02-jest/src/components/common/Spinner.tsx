/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const wrapper = css`
  border: none !important;
  box-shadow: none !important;
  height: 20em;
`;

const Spinner: FC<{ message?: string }> = ({ message = '読み込み中...' }) => (
  <Segment css={wrapper}>
    <Dimmer active inverted>
      <Loader inverted={false}>{message}</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
