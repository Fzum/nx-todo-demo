import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';
import { ButtonSeverity } from './button-severity';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Button',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  clicked: action('clicked'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    clicked: actionsData.clicked,
  },
});

export const Primary = Template.bind({});
Primary.args = {
  severity: ButtonSeverity.PRIMARY,
  txt: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  severity: ButtonSeverity.SECONDARY,
  txt: 'Secondary',
  state: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  severity: ButtonSeverity.DANGER,
  txt: 'Danger',
  state: 'Danger',
};
