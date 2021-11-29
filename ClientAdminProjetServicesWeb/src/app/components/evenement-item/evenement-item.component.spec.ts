import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementItemComponent } from './evenement-item.component';

describe('EvenementItemComponent', () => {
  let component: EvenementItemComponent;
  let fixture: ComponentFixture<EvenementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
