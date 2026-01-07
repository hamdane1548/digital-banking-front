import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { AuthDashbord } from './layouts/auth-dashbord/auth-dashbord';

import { Home } from './ui/home/home';
import { Contact } from './ui/contact/contact';
import { About } from './ui/about/about';
import { Login } from './ui/login/login';
import {Index} from './dashbord/ui/index';
import {authenticationGuard} from './guards/authentication-guard';
import {About} from './ui/about/about';
import {Account} from './ui/account/account';
import {Customers} from './dashbord/ui/customers/customers';
import {Savingaccount} from './dashbord/ui/savingaccount/savingaccount';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'contact', component: Contact },
      { path: 'about', component: About }
    ]
  },
  {
    path: 'login',
    component: AuthLayout,
    children: [
      { path: '', component: Login }
    ]
  },
  {
    path: 'dashbord',
    component: AuthDashbord,
    children: [
      {
        path: '',
        component: Index},
      {
        path: 'customers',
        component: Customers},
      {

        path: 'transactions',
        loadComponent: () =>
          import('./dashbord/ui/transactions/transactions')
            .then(m => m.Transactions)
      },
      {
        path: 'operations',
        loadComponent: () =>
          import('./dashbord/ui/operations/operations')
            .then(m => m.Operations)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./dashbord/ui/settings/settings')
            .then(m => m.Settings)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
