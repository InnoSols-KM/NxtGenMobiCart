import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTEditPurchaseComponent } from './gst-edit-purchase.component';

describe('GSTEditPurchaseComponent', () => {
  let component: GSTEditPurchaseComponent;
  let fixture: ComponentFixture<GSTEditPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSTEditPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSTEditPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
