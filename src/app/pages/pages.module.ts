import { UIRouter, UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';



// Modulo
import { SharedModule } from '../shared/shared.module';
import { PAGES_STATES } from './pages.states';

// Componentes
import { PagesComponent } from './pages.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ResultadosComponent } from './proveedores/resultados/resultados.component';
import { NuevoComponent } from './proveedores/nuevo/nuevo.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoResultsComponent } from './productos/resultados/producto.results.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        PagesComponent,
        ProveedoresComponent,
        ResultadosComponent,
        NuevoComponent,
        ProductosComponent,
        ProductoResultsComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        UIRouterModule.forChild({ states : PAGES_STATES}),
        SharedModule,
        NgbModule
    ]
})
export class PagesModule { }
