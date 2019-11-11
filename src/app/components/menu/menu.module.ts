import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./menu.component";

const routes: Routes = [
  { path: 'menu2', component: MenuComponent },
];

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [[RouterModule.forChild(routes)]],
  providers: []
})
export class MenuModule {}
