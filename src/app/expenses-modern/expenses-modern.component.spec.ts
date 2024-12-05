import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesModernComponent } from './expenses-modern.component';

describe('ExpensesModernComponent', () => {
  let component: ExpensesModernComponent;
  let fixture: ComponentFixture<ExpensesModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesModernComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
