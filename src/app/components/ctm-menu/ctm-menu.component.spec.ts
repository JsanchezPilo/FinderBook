import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmMenuComponent } from './ctm-menu.component';

describe('CtmMenuComponent', () => {
  let component: CtmMenuComponent;
  let fixture: ComponentFixture<CtmMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtmMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
