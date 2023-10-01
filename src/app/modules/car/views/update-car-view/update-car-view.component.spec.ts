import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarViewComponent } from './update-car-view.component';

describe('UpdateCarViewComponent', () => {
  let component: UpdateCarViewComponent;
  let fixture: ComponentFixture<UpdateCarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
