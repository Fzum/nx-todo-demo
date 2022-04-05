import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TodoFeatureManageModule } from '@nx-todo-demo/todo/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { TodoFeatureViewModule } from '@nx-todo-demo/todo/feature-view';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    TodoFeatureManageModule,
    HttpClientModule,
    TodoFeatureViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
