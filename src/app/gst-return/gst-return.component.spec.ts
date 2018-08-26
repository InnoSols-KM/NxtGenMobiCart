import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTReturnComponent } from './gst-return.component';

describe('GSTReturnComponent', () => {
  let component: GSTReturnComponent;
  let fixture: ComponentFixture<GSTReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSTReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSTReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
