import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDomainModule } from '@nx-todo-demo/todo/domain';
import { ViewComponent } from './view.component';
import {SharedUiComponentsModule} from "@nx-todo-demo/shared/ui-components";

@NgModule({
    imports: [CommonModule, TodoDomainModule, SharedUiComponentsModule],
  declarations: [ViewComponent],
  exports: [ViewComponent],
})
export class TodoFeatureViewModule {}
