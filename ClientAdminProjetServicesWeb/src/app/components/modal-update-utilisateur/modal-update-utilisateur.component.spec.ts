import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateUtilisateurComponent } from './modal-update-utilisateur.component';

describe('ModalUpdateUtilisateurComponent', () => {
  let component: ModalUpdateUtilisateurComponent;
  let fixture: ComponentFixture<ModalUpdateUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
