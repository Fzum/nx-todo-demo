import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

const defaultHeading = 'Welcome to NX Todo';

@Component({
  selector: 'nx-todo-demo-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  heading = defaultHeading;

  private urlHeadingMap = new Map<string, string>([
    ['view', 'View your Todos'],
    ['manage', 'Manage your Todos'],
  ]);

  private sub: Subscription;

  constructor(private router: Router) {
    this.sub = router.events
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
