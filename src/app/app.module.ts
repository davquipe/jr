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

import { AppComponent } from './app.component';
import { MyMainComponent } from './my.main.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyMainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
