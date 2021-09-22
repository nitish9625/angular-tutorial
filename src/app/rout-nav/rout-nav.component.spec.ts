import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutNavComponent } from './rout-nav.component';

describe('RoutNavComponent', () => {
  let component: RoutNavComponent;
  let fixture: ComponentFixture<RoutNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
