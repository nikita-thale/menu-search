import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from "./menu.component";
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: "", component: MenuComponent },
  { path: "menu2", component: MenuComponent }
];

@NgModule({
  declarations: [MenuComponent],
  exports: [],
  imports: [
    MatCardModule,
    RouterModule.forChild(routes)],
  providers: []
})
export class MenuModule {}
