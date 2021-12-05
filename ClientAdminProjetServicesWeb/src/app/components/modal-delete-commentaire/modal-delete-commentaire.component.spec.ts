import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteCommentaireComponent } from './modal-delete-commentaire.component';

describe('ModalDeleteCommentaireComponent', () => {
  let component: ModalDeleteCommentaireComponent;
  let fixture: ComponentFixture<ModalDeleteCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
