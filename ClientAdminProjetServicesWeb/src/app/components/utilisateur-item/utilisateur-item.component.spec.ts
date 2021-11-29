import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurItemComponent } from './utilisateur-item.component';

describe('UtilisateurItemComponent', () => {
  let component: UtilisateurItemComponent;
  let fixture: ComponentFixture<UtilisateurItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
