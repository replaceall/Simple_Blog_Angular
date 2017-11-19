import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourblogsComponent } from './yourblogs.component';

describe('YourblogsComponent', () => {
  let component: YourblogsComponent;
  let fixture: ComponentFixture<YourblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
