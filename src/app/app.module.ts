import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';

// import { ESTADOS_UIROUTER } from './test.states';
import { routerConfigFn } from './routing.config';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PagesModule,
    SharedModule,
    UIRouterModule.forRoot({
      // states: ESTADOS_UIROUTER,
      useHash: false,
      otherwise: { state: 'app' },
      config: routerConfigFn
    })

  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
