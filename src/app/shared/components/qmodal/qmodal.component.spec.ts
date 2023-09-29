import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QmodalComponent } from './qmodal.component';

describe('QmodalComponent', () => {
  let component: QmodalComponent;
  let fixture: ComponentFixture<QmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
