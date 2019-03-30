import { configure } from '@storybook/react';

import '../src/styles/semantic.min.css';
import '../src/index.css';

const req = require.context('../src/components', true, /.(story|stories).tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
