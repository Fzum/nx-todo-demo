import {Component, OnInit} from '@angular/core';
import {Todo, ViewFacade} from '@nx-todo-demo/todo/domain';
import {ButtonSeverity} from '@nx-todo-demo/shared/ui-components';
import {BehaviorSubject, combineLatest, first, map, withLatestFrom,} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;
  isLoading$ = this.viewFacade.isLoading$;
  selectedTodos$ = this.viewFacade.selectedTodos$;

  buttonSeverity = ButtonSeverity;

  searchFc = new FormControl('');
  searchedTodos$ = new BehaviorSubject<Todo[]>([]);

  isAllSearchedSelected$ = new BehaviorSubject(false);

  // todo unsubscribe and refactor
  constructor(public viewFacade: ViewFacade) {
    this.todos$.subscribe(this.searchedTodos$);

    combineLatest([this.selectedTodos$, this.searchedTodos$])
      .pipe(
        map(([searched, selected]) => [
          searched.map((s) => s.id),
          selected.map((s) => s.id),
        ])
      )
      .subscribe(([searchedIds, selectedIs]) =>
        this.isAllSearchedSelected$.next(
          selectedIs.every((id) => searchedIds.includes(id))
        )
      );

    this.searchFc.valueChanges.subscribe((searchTerm) =>
      this.todos$
        .pipe(
          map((todos) =>
            todos.filter((t) =>
              t.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          ),
          first()
        )
        .subscribe((searchedTodos) => this.searchedTodos$.next(searchedTodos))
    );
  }

  ngOnInit() {
    this.viewFacade.loadTodos();
  }

  toggleSelection(todo: Todo) {
    this.getSelectedTodos$().subscribe((selectedTodos) => {
      if (selectedTodos.includes(todo)) {
        this.viewFacade.deselect(todo);
      } else {
        this.viewFacade.select(todo);
      }
    });
  }

  toggleManySelection() {
    this.searchedTodos$
      .pipe(withLatestFrom(this.selectedTodos$), first())
      .subscribe(([searched, selected]) => {
        const isAllSearchedSelected = searched.every((t) =>
          selected.includes(t)
        );

        if (isAllSearchedSelected) {
          this.viewFacade.deselectMany(searched);
        } else {
          this.viewFacade.selectMany(searched);
        }
      });
  }

  isSelected(todo: Todo) {
    return this.getSelectedTodos$().pipe(
      map((selectedTodos) => selectedTodos.includes(todo))
    );
  }

  isAnyTodoSelected$() {
    return this.getSelectedTodos$().pipe(map(t => t.length > 0))
  }

  private getSelectedTodos$() {
    return this.selectedTodos$.pipe(first());
  }
}
