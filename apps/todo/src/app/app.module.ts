import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TodoFeatureManageModule } from '@nx-todo-demo/todo/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { TodoFeatureViewModule } from '@nx-todo-demo/todo/feature-view';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    TodoFeatureManageModule,
    HttpClientModule,
    TodoFeatureViewModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      { path: '**', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'manage',
        loadChildren: () =>
          import('@nx-todo-demo/todo/feature-manage').then(
            (m) => m.TodoFeatureManageModule
          ),
      },
      {
        path: 'view',
        loadChildren: () =>
          import('@nx-todo-demo/todo/feature-view').then(
            (m) => m.TodoFeatureViewModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
