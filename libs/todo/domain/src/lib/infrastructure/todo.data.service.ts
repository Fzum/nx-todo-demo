import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Todo } from '../entities/todo';

@Injectable({ providedIn: 'root' })
export class TodoDataService {
  load(): Observable<Todo[]> {
    return of([
      { id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      {
        id: 2,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]).pipe(delay(500));
  }
}
