import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurItemDetailComponent } from './utilisateur-item-detail.component';

describe('UtilisateurItemDetailComponent', () => {
  let component: UtilisateurItemDetailComponent;
  let fixture: ComponentFixture<UtilisateurItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
