import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { CardComponent } from './card.component';
import { CardConfiguration } from './card-configuration.model';

export default {
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Card',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  cta: action('clicked'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    cta: actionsData.cta,
  },
});

export const View = Template.bind({});
View.args = {
  config: {
    iconUrl: 'https://fakeimg.pl/350x200/?text=Icon',
    heading: 'Heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi! ',
  } as CardConfiguration,
};
