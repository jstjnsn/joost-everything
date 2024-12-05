import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { expenseCategories } from '../shared/constants';
import { Expense, ExpenseCategory } from '../shared/types';

@Component({
  standalone: true,
  selector: 'app-expenses',
  imports: [CommonModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss',
})
export class ExpensesComponent {
  expenses = signal<Expense[]>(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses') as string)
      : []
  );
  expenseCategories = signal<ExpenseCategory[]>(expenseCategories);

  newExpenseName = '';
  newExpenseAmount = 0;
  newExpenseDate = new Date();
  newExpenseCategory = '';

  constructor() {
    effect(() => {
      localStorage.setItem('expenses', JSON.stringify(this.expenses()));
    });
  }

  addExpense(event: Event) {
    event.preventDefault();
    if (
      !this.newExpenseName ||
      !this.newExpenseAmount ||
      !this.newExpenseDate ||
      !this.newExpenseCategory
    ) {
      return;
    }
    this.expenses.update((expenses) => [
      ...expenses,
      {
        name: this.newExpenseName,
        amount: this.newExpenseAmount,
        date: this.newExpenseDate,
        category: this.newExpenseCategory,
      },
    ]);
  }
}
