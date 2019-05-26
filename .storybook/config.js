import { addParameters, configure } from '@storybook/react';
import theme from './theme';
import '@storybook/addon-console';
require('./global.css');

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({
    options: {
        theme: theme
    }
});

configure(loadStories, module);
