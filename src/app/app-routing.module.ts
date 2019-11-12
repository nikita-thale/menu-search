import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuModule } from './components/menu/menu.module';

const routes: Routes = [
  // { path: '', redirectTo: 'menu1', pathMatch: 'full' },
  {
    path: 'menu1',
    // loadChildren: './components/search/search.module#SearchModule'
    loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'menu2',
    // loadChildren: './components/menu/menu.module#MenuModule',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
    // loadChildren: () => MenuModule
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
