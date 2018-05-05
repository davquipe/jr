import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
import { UIRouterModule, UIView } from '@uirouter/angular';
/* import { TemplateComponent } from './template.component'; */
/* import { MenuService } from './medicamentos/medicamento.service'; */
/* import {CodigoBarraService} from './compras/compra.service'; */
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { MyMainComponent } from './my.main.component';
import { MenuComponent } from './menu/menu.component';

// Modulos
import { ESTADOS_UIROUTER } from './test.states';
import { routerConfigFn } from './routing.config';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyMainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PagesModule,
    SharedModule,
    UIRouterModule.forRoot({
      states: ESTADOS_UIROUTER,
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
