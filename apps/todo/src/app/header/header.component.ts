import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

const defaultHeading = 'Welcome to NX Todo';

@Component({
  selector: 'nx-todo-demo-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  heading = defaultHeading;

  private urlHeadingMap = new Map<string, string>([
    ['view', 'View your Todos'],
    ['manage', 'Manage your Todos'],
  ]);

  constructor(private router: Router) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((e) => e as NavigationEnd)
      )
      .subscribe((event) => {
        const keys = [...this.urlHeadingMap.keys()];
        const urlKey = keys.find((k) => event.url.includes(k));

        this.heading = urlKey
          ? (this.urlHeadingMap.get(urlKey) as string)
          : defaultHeading;
      });
  }
}
