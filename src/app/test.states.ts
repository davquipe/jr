import { UIRouter, StateRegistry, Transition, StateService, StateParams, Ng2StateDeclaration } from "@uirouter/angular"



import { MyMainComponent } from './my.main.component';
import { MenuComponent } from './menu/menu.component';

export const appState: Ng2StateDeclaration = {
    name: 'app',
    url: '/web',
    views: {
      '$default': {
        component: MyMainComponent //fuseMainCompoent
      },
      'menu@app': {
        component: MenuComponent //fuseMainCompoent
      }
    }
  };
