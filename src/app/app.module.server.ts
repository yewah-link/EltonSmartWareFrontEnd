import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule'; // Import the module

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatToolbarModule,
    DemoAngularMaterialModule // Include DemoAngularMaterialModule here
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
