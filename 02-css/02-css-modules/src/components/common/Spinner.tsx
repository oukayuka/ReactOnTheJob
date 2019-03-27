import React, { FC } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

import styles from './spinner.module.css';

const Spinner: FC = () => (
  <Segment className={styles.spinner}>
    <Dimmer active inverted>
      <Loader inverted={false}>読み込み中...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
