import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarEvenementComponent } from './search-bar-evenement.component';

describe('SearchBarEvenementComponent', () => {
  let component: SearchBarEvenementComponent;
  let fixture: ComponentFixture<SearchBarEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
