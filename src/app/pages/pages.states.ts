import { Ng2StateDeclaration, loadNgModule } from '@uirouter/angular';


import { PagesComponent } from './pages.component';
import { ProveedorComponent } from './proveedores/proveedor.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

export function getAllPages(pagSvc) {
  return pagSvc.all();
}

export const appState: Ng2StateDeclaration = {
    name: 'app',
    url: '',
    views: {
      '$default': {
        component: PagesComponent
      },
    },
  };

  export const proveedoresBusquedaState: Ng2StateDeclaration = {
    name: 'app.proveedores',
    url: '/proveedores',
    views: {
      'actions@app': {
        component: ProveedorComponent
      },
    },
  };

  export const proveedoresResultadoState: Ng2StateDeclaration = {
    name: 'app.proveedores.resultados',
    url: '/resultados',
    views: {
      'content@app': {
        component: ProveedoresComponent
      },
    },
  };


  export const PAGES_STATES = [
    appState,
    proveedoresBusquedaState,
    proveedoresResultadoState
  ];