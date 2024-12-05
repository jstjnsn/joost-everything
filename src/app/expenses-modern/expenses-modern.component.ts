import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { expenseCategories } from '../shared/constants';
import { Expense, ExpenseCategory } from '../shared/types';

@Component({
  standalone: true,
  selector: 'app-expenses-modern',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expenses-modern.component.html',
  styleUrl: './expenses-modern.component.scss',
})
export class ExpensesModernComponent {
  expensesForm = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(0),
    date: new FormControl(new Date(Date.now())),
    category: new FormControl(''),
  });

  expenses = signal<Expense[]>([]);
  expenseCategories = signal<ExpenseCategory[]>(expenseCategories);

  addExpense(event: Event) {
    event.preventDefault();
    const { name, amount, date, category } = this.expensesForm.value;
    if (!name || !amount || !date || !category) {
      return;
    }
    this.expenses.update((expenses) => [
      ...expenses,
      { name, amount, date, category },
    ]);
  }
}
