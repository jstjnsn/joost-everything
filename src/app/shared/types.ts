import { expenseCategories } from './constants';

export type Expense = {
  name: string;
  amount: number;
  date: Date;
  category: string;
};

export type ExpenseCategory = (typeof expenseCategories)[number];
