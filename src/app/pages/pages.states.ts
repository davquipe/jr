import { Ng2StateDeclaration, loadNgModule } from '@uirouter/angular';


import { PagesComponent } from './pages.component';
import { ProveedoresComponent } from './proveedores/proveedor.component';

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
        component: ProveedoresComponent
      },
    },
  };


  export const PAGES_STATES = [
    appState,
    proveedoresBusquedaState
  ];