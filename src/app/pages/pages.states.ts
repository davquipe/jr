import { Ng2StateDeclaration, loadNgModule, Transition, StateService  } from '@uirouter/angular';


import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PagesComponent } from './pages.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ResultadosComponent } from './proveedores/resultados/resultados.component';
import { NuevoComponent } from './proveedores/nuevo/nuevo.component';
import { ProveedorService } from '../services/proveedor.service';


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
    views: {
      'content@app': {
        component:   ResultadosComponent
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



  export const PAGES_STATES = [
    appState,
    proveedoresBusquedaState,
    proveedoresResultadoState,
    proveedoresModalNuevoState,
    ProveedorNuevoState
  ];