import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchadenberichteComponent } from './schadenberichte.component';

describe('SchadenberichteComponent', () => {
  let component: SchadenberichteComponent;
  let fixture: ComponentFixture<SchadenberichteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchadenberichteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchadenberichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
