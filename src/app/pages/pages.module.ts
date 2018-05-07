import { UIRouter, UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';



// Modulo
import { SharedModule } from '../shared/shared.module';
import { PAGES_STATES } from './pages.states';

// Componentes
import { PagesComponent } from './pages.component';
import { ProveedorComponent } from './proveedores/proveedor.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';






@NgModule({
    declarations: [
        PagesComponent,
        ProveedorComponent,
        ProveedoresComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        UIRouterModule.forChild({ states : PAGES_STATES}),
        SharedModule
    ]
})
export class PagesModule { }
