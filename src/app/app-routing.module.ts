import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './components/search/search.module#SearchModule'
  },
  {
    path: 'menu1',
    loadChildren: './components/search/search.module#SearchModule'
  },{
    path: 'menu2',
    loadChildren: './components/menu/menu.module#MenuModule'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
