import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../entities/todo';

@Injectable({ providedIn: 'root' })
export class TodoDataService {
  load(): Observable<Todo[]> {
    return of([
      { id: 1, name: 'Study', description: 'Lorem ipsum dolor sit amet' },
      {
        id: 2,
        name: 'Groceries',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'Housekeeping',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 3,
        name: 'Housekeeping',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 4,
        name: 'Housekeeping',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 5,
        name: 'Housekeeping',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 6,
        name: 'Housekeeping',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 7,
        name: 'Housekeeping',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
}
