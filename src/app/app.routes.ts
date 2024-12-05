import { Routes } from '@angular/router';
import { ExpensesModernComponent } from './expenses-modern/expenses-modern.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
  },
  {
    path: 'expenses-modern',
    component: ExpensesModernComponent,
  },
];
