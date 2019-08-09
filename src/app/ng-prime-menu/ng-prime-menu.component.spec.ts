import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrimeMenuComponent } from './ng-prime-menu.component';

describe('NgPrimeMenuComponent', () => {
  let component: NgPrimeMenuComponent;
  let fixture: ComponentFixture<NgPrimeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPrimeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPrimeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
