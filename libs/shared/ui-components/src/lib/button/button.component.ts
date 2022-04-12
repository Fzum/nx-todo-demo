import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { ButtonSeverity } from './button-severity';

@Component({
  selector: 'components-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ButtonComponent {
  @Input() severity = ButtonSeverity.PRIMARY;
  @Input() txt = 'Button';

  @Output() clicked = new EventEmitter();

  severityEnum = ButtonSeverity;
}
