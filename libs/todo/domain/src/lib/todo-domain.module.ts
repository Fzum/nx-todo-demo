import * as fromTodo from './+state/todo/todo.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEffects } from './+state/todo/todo.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.TODO_FEATURE_KEY, fromTodo.todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoDomainModule {}
