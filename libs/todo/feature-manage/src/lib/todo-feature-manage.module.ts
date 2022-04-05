import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDomainModule } from '@nx-todo-demo/todo/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, TodoDomainModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class TodoFeatureManageModule {}
