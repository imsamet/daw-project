import React from 'react';

import Button from '../elements/button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button Label</Button>;

export const Primary = Template.bind({});
