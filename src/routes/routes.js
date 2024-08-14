import {
  BaseLayout
} from '../layouts';
import { Repositorios } from '../views/Repositorios';
import { Usuarios } from '../views/Usuarios';

export const routes = [
  {
    path: '/usuarios',
    layout: BaseLayout,
    component: Usuarios,
    titleMessage: 'Usuarios',
  },
  {
    path: '/repositorios',
    layout: BaseLayout,
    component: Repositorios,
    titleMessage: 'Repositorios',
  }
];
