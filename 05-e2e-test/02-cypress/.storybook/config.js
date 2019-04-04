import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import requireContext from 'require-context.macro';

import '../src/styles/semantic.min.css';
import '../src/index.css';

const req = requireContext('../src/components', true, /.(story|stories).tsx$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(withKnobs);
  req.keys().forEach(req);
}

configure(loadStories, module);
