import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalNavbarComponent } from './final-navbar.component';

describe('FinalNavbarComponent', () => {
  let component: FinalNavbarComponent;
  let fixture: ComponentFixture<FinalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
