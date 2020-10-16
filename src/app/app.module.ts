import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {BrowserModule} from '@angular/platform-browser';

import {ContainersModule} from './containers';
import {reducers} from './store';

import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContainersModule,
    StoreModule.forRoot(reducers),
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
