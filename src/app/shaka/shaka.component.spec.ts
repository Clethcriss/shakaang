import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakaComponent } from './shaka.component';

describe('ShakaComponent', () => {
  let component: ShakaComponent;
  let fixture: ComponentFixture<ShakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
