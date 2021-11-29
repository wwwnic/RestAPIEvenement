import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteUtilisateurComponent } from './modal-delete-utilisateur.component';

describe('ModalDeleteUtilisateurComponent', () => {
  let component: ModalDeleteUtilisateurComponent;
  let fixture: ComponentFixture<ModalDeleteUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
