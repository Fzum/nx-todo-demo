import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardConfiguration } from './card-configuration.model';

@Component({
  selector: 'components-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() config: CardConfiguration = {
    heading: 'Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aut consequatur labore magnam necessitatibus placeat qui sit soluta voluptate! Debitis distinctio eligendi iure necessitatibus nesciunt nihil officiis perspiciatis sequi!',
  };

  @Output() cta = new EventEmitter();
}
