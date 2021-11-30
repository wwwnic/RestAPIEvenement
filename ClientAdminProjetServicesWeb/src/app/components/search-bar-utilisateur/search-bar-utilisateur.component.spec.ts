import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarUtilisateurComponent } from './search-bar-utilisateur.component';

describe('SearchBarUtilisateurComponent', () => {
  let component: SearchBarUtilisateurComponent;
  let fixture: ComponentFixture<SearchBarUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
