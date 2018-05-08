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

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProveedorService } from './services/proveedor.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PagesModule,
    SharedModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      // states: ESTADOS_UIROUTER,
      useHash: false,
      otherwise: { state: 'app' },
      config: routerConfigFn
    })

  ],
  providers: [
    HttpClientModule,
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
