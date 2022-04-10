import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedUiComponentsModule } from '@nx-todo-demo/shared/ui-components';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
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
      { path: '**', redirectTo: 'dashboard' },
    ]),
    SharedUiComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
