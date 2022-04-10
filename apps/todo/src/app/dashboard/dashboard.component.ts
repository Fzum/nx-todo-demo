import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardConfiguration } from '../../../../../libs/shared/ui-components/src/lib/card/card-configuration.model';

@Component({
  selector: 'nx-todo-demo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public router: Router) {}

  readonly viewCardConfig: CardConfiguration = {
    heading: 'View',
    description: 'Overview of all todos you created',
  };

  readonly manageCardConfig: CardConfiguration = {
    heading: 'Manage',
    description:
      'Manage your todos. Here you can create, delete and do other stuff.',
  };
}
