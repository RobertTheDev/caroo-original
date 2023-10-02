import { Component, Input } from '@angular/core';
import ICar from 'models/car/interfaces/Car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() car!: ICar;
}
