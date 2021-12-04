import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementItemDetailComponent } from './evenement-item-detail.component';

describe('EvenementItemDetailComponent', () => {
  let component: EvenementItemDetailComponent;
  let fixture: ComponentFixture<EvenementItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
