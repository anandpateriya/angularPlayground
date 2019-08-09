import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiyComponent } from './menu-diy.component';

describe('MenuDiyComponent', () => {
  let component: MenuDiyComponent;
  let fixture: ComponentFixture<MenuDiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
