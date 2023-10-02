import { Component, OnInit } from '@angular/core';
import ICar from 'models/car/interfaces/Car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss'],
})
export class CarsViewComponent implements OnInit {
  constructor(private carService: CarService) {}

  cars: ICar[] = [];
  loading = true;
  errorMessage: string | null = null;

  ngOnInit() {
    this.carService.getCars().subscribe({
      next: data => {
        this.loading = false;
        this.cars = data.data;
      },
      error: error => {
        this.loading = false;
        this.errorMessage = error;
      },
    });
  }
}
