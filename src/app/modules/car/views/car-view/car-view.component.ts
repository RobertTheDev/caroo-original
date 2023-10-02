import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ICar from 'models/car/interfaces/Car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.scss'],
})
export class CarViewComponent implements OnInit {
  constructor(private carService: CarService, private route: ActivatedRoute) {}

  car: ICar | null = null;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.carService.getCarById(id).subscribe({
      next: (data) => {
        this.car = data.data;
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }
}
