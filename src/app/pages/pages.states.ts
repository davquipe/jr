import { Ng2StateDeclaration, loadNgModule, Transition, StateService } from '@uirouter/angular';


import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';

import { PagesComponent } from './pages.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ResultadosComponent } from './proveedores/resultados/resultados.component';
import { NuevoComponent } from './proveedores/nuevo/nuevo.component';
import { ProveedorService } from '../services/proveedor.service';
import { ProductosComponent } from './productos/productos.component';
import { ProductoResultsComponent } from './productos/resultados/producto.results.component';
import { NuevoproComponent } from './productos/nuevo/nuevopro.component';


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

export const proveedoresResultadoState: Ng2StateDeclaration = {
  name: 'app.proveedores.resultados',
  url: '/resultados',
  resolve: [
    {
      token: 'proveedoresPage',
      deps: [Transition, Http],
      resolveFn: (trans, http) => {
        return http.get('/assets/data.json')
          .map( (resp) => resp.json())
          .toPromise();
      }
    }
  ],
  views: {
    'content@app': {
      component: ResultadosComponent
    },
  },
};

export const proveedoresModalNuevoState: Ng2StateDeclaration = {
  name: 'app.proveedores.resultados.form',
  url: '/modal/{codigoProveedor}',
  resolve: [
    {
      token: 'proveedores',
      deps: [Transition, ProveedorService],
      resolveFn: (trans, menuSvc) => {
        return menuSvc.getCategories().then(function(resp) {
          return resp;
        });
      }
    }
  ],
  onEnter: function(trans: Transition) {
    let injector = trans.injector();
    let uibModal: any = injector.get(NgbModal);
    let proveedores: any = injector.get('proveedores');
    // alert('onEnter');
    // debugger;
    let stateService: any = injector.get(StateService);
    let modalRef: NgbModalRef = uibModal.open(NuevoComponent, { size: 'lg' });
    (<NuevoComponent>modalRef.componentInstance).greeting = 'aaaaa';
    (<NuevoComponent>modalRef.componentInstance).proveedores = proveedores;

    modalRef.result.then(
      (msg: any) => {
        stateService.go('^');
        return msg;
      },
      (msg: any) => {
        stateService.go('^');
        return msg;
      });
  }
};

export const ProveedorNuevoState: Ng2StateDeclaration = {
  name: 'app.medicamento',
  url: '/nuevo',
  views: {
    'content@app': {
      component: NuevoComponent
    }
  }
};

export const productosBusquedaState: Ng2StateDeclaration = {
  name: 'app.productos',
  url: '/productos',
  views: {
    'actions@app': {
      component: ProductosComponent
    },
  },
};

export const productoresultsResultadoState: Ng2StateDeclaration = {
  name: 'app.productos.resultados',
  url: newFunction(),
  resolve: [
    {
      token: 'productoresultsPage',
      deps: [Transition, Http],
      resolveFn: (trans, http) => {
        return http.get('/assets/data.json')
          .map( (resp) => resp.json())
          .toPromise();
      }
    }
  ],
  views: {
    'content@app': {
      component: ProductoResultsComponent
    },
  },
};

export const NuevoproNuevoState: Ng2StateDeclaration = {
  name: 'app.productos.nuevopro',
  url: '/nuevo',
  views: {
    'content@app': {
      component: NuevoproComponent
    }
  }
};

export const PAGES_STATES = [
  appState,
  proveedoresBusquedaState,
  proveedoresResultadoState,
  proveedoresModalNuevoState,
  ProveedorNuevoState,
  productosBusquedaState,
  productoresultsResultadoState,
  NuevoproNuevoState
];
function newFunction(): string {
  return '/resultados';
}

