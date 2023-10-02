import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundViewComponent } from './modules/shared/views/not-found-view/not-found-view.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/car/car-routing.module').then(
        (m) => m.CarRoutingModule
      ),
  },
  { path: '**', component: NotFoundViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
