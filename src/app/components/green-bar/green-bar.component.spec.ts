import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBarComponent } from './green-bar.component';

describe('GreenBarComponent', () => {
  let component: GreenBarComponent;
  let fixture: ComponentFixture<GreenBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
