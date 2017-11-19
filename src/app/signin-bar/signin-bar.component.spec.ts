import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninBarComponent } from './signin-bar.component';

describe('SigninBarComponent', () => {
  let component: SigninBarComponent;
  let fixture: ComponentFixture<SigninBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
