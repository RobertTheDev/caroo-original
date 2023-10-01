import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarModule } from './modules/car/car.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'caroo-app',
    }),
    AppRoutingModule,
    CarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
