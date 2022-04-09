import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDomainModule } from '@nx-todo-demo/todo/domain';
import { ManageComponent } from './manage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TodoDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManageComponent,
      },
    ]),
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class TodoFeatureManageModule {}
