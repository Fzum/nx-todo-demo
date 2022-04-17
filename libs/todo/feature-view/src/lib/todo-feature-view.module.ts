import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDomainModule } from '@nx-todo-demo/todo/domain';
import { ViewComponent } from './view/view.component';
import { SharedUiComponentsModule } from '@nx-todo-demo/shared/ui-components';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TodoDomainModule,
    SharedUiComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewComponent,
      },
    ]),
    FormsModule,
  ],
  declarations: [ViewComponent],
  exports: [ViewComponent],
})
export class TodoFeatureViewModule {}
