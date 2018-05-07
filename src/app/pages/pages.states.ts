import { Ng2StateDeclaration, loadNgModule } from '@uirouter/angular';


import { PagesComponent } from './pages.component';

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
    }
  };


  export const PAGES_STATES = [
    appState
  ];