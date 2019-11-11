import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavModule } from "./components/nav/nav.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    NavModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
