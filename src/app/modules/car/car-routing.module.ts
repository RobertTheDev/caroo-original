import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsViewComponent } from './views/cars-view/cars-view.component';
import { CarViewComponent } from './views/car-view/car-view.component';
import { CreateCarViewComponent } from './views/create-car-view/create-car-view.component';
import { UpdateCarViewComponent } from './views/update-car-view/update-car-view.component';

const routes: Routes = [
  { path: '', component: CarsViewComponent },
  { path: 'cars/:id', component: CarViewComponent },
  { path: 'cars/:id/edit', component: UpdateCarViewComponent },
  { path: 'sell-a-car', component: CreateCarViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
