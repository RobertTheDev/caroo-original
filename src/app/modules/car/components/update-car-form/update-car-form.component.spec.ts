import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarFormComponent } from './update-car-form.component';

describe('UpdateCarFormComponent', () => {
  let component: UpdateCarFormComponent;
  let fixture: ComponentFixture<UpdateCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCarFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
