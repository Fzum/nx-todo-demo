import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDomainModule } from '@nx-todo-demo/todo/domain';
import { ViewComponent } from './view.component';
import { SharedUiComponentsModule } from '@nx-todo-demo/shared/ui-components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TodoDomainModule,
    SharedUiComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent,
      },
    ]),
  ],
  declarations: [ViewComponent],
  exports: [ViewComponent],
})
export class TodoFeatureViewModule {}
