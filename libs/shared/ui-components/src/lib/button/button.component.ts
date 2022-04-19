import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonIcons, ButtonSeverity} from './buttonSeverity';

@Component({
  selector: 'components-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ButtonComponent {
  @Input() severity = ButtonSeverity.PRIMARY;
  @Input() txt = 'Button';
  @Input() icon = ButtonIcons.TRASH;

  @Output() clicked = new EventEmitter();

  severityEnum = ButtonSeverity;
  iconEnum = ButtonIcons;
}
