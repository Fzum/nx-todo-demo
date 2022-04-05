import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDomainModule } from '@nx-todo-demo/todo/domain';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [CommonModule, TodoDomainModule],
  declarations: [ViewComponent],
  exports: [ViewComponent],
})
export class TodoFeatureViewModule {}
