import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CreateCarFormComponent } from './components/create-car-form/create-car-form.component';
import { UpdateCarFormComponent } from './components/update-car-form/update-car-form.component';
import { CarsViewComponent } from './views/cars-view/cars-view.component';
import { CreateCarViewComponent } from './views/create-car-view/create-car-view.component';
import { CarViewComponent } from './views/car-view/car-view.component';
import { UpdateCarViewComponent } from './views/update-car-view/update-car-view.component';
import { CarService } from 'src/app/services/car/car.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CarCardComponent,
    CreateCarFormComponent,
    UpdateCarFormComponent,
    CarsViewComponent,
    CreateCarViewComponent,
    CarViewComponent,
    UpdateCarViewComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CarsViewComponent,
    CreateCarViewComponent,
    CarViewComponent,
    UpdateCarViewComponent,
  ],
  providers: [CarService],
})
export class CarModule {}
