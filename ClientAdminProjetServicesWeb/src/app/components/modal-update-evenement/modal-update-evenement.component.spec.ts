import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateEvenementComponent } from './modal-update-evenement.component';

describe('ModalUpdateEvenementComponent', () => {
  let component: ModalUpdateEvenementComponent;
  let fixture: ComponentFixture<ModalUpdateEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
