import { Component, OnInit } from '@angular/core';
import { ViewFacade } from '@nx-todo-demo/todo/domain';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;

  constructor(private viewFacade: ViewFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.viewFacade.load();
  }
}
