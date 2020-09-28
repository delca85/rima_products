import { addDecorator, addParameters } from '@storybook/react';
import routerDomDecorator from './router-dom-decorator';

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
});

addDecorator(routerDomDecorator);
