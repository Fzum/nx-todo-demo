import {Meta, moduleMetadata, Story} from '@storybook/angular';

import {CommonModule} from '@angular/common';

import {action} from '@storybook/addon-actions';
import {ButtonComponent} from './button.component';
import {ButtonIcons, ButtonSeverity} from './buttonSeverity';

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
};

export const Danger = Template.bind({});
Danger.args = {
  severity: ButtonSeverity.DANGER,
  txt: 'Danger',
};

export const IconTrash = Template.bind({});
IconTrash.args = {
  severity: ButtonSeverity.SECONDARY,
  icon: ButtonIcons.TRASH,
  txt: 'Trash',
};

export const IconPlus = Template.bind({});
IconPlus.args = {
  severity: ButtonSeverity.SECONDARY,
  icon: ButtonIcons.PLUS,
  txt: 'Plus',
};

export const IconPencil = Template.bind({});
IconPencil.args = {
  severity: ButtonSeverity.SECONDARY,
  icon: ButtonIcons.PENCIL,
  txt: 'Pencil',
};
