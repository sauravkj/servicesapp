import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyiotComponent } from './simplyiot.component';

describe('SimplyiotComponent', () => {
  let component: SimplyiotComponent;
  let fixture: ComponentFixture<SimplyiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplyiotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplyiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
