import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './ui/home/home';
import { Navbar } from './component/navbar/navbar';
import { MainLayout } from './layouts/main-layout/main-layout';
import {
  LucideAngularModule,
  WalletMinimal,
  BanknoteArrowUp,
  UserCheck,
  Lock,
  Clock9,
  FunnelPlus,
  CreditCard,
  TrendingDown,
  TrendingUp,
  Send,
  Eclipse,
  Phone,
  ChevronRight,
  Handshake,
  HandCoins,
  DollarSign,
  Workflow,
  Briefcase,
  Users,
  FileUser,
  MessagesSquare,
  Building2,
  User,
  Settings,
  LogOut,
  BotMessageSquare,
  MessageCircleMore,
  Bell,
  RefreshCw,
  ChevronDown,
  EllipsisVertical,
  House,
  Form
} from 'lucide-angular';

import { WhyChosse } from './component/why-chosse/why-chosse';
import { AvisClient } from './component/avis-client/avis-client';
import { Footer } from './component/footer/footer';
import { Contact } from './ui/contact/contact';
import { Login } from './ui/login/login';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Customers } from './dashbord/ui/customers/customers';
import { ReactiveFormsModule } from '@angular/forms';
import { Sidebar } from './dashbord/components/sidebar/sidebar';
import { Navbardashbord } from './dashbord/components/navbardashbord/navbardashbord';
import { Index } from './dashbord/ui/index/index';
import { AuthDashbord } from './layouts/auth-dashbord/auth-dashbord';
import { About } from './ui/about/about';
import { Transactions } from './dashbord/ui/transactions/transactions';
import { Operations } from './dashbord/ui/operations/operations';
import {appAuthinterceptorInterceptor} from './interceptors/app-authinterceptor-interceptor';
import {NgClass} from '@angular/common';
import { Savingaccount } from './dashbord/ui/savingaccount/savingaccount';
import {Customers} from './dashbord/ui/customers/customers';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    MainLayout,
    WhyChosse,
    AvisClient,
    Footer,
    Contact,
    Login,
    AuthLayout,
    Customers,
    Sidebar,
    Navbardashbord,
    Index,
    AuthDashbord,
    About,
    Savingaccount
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      WalletMinimal,
      BanknoteArrowUp,
      UserCheck,
      Lock,
      Clock9,
      FunnelPlus,
      CreditCard,
      TrendingDown,
      TrendingUp,
      Send,
      Eclipse,
      Workflow,
      Phone,
      Briefcase,
      Handshake,
      DollarSign,
      HandCoins,
      ChevronRight,
      Users,
      FileUser,
      MessagesSquare,
      Building2,
      User,
      Settings,
      LogOut,
      BotMessageSquare,
      MessageCircleMore,
      Bell,
      RefreshCw,
      ChevronDown,
      EllipsisVertical,
      House,
      Form
    }),
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([appAuthinterceptorInterceptor])
    ),
  ],
  bootstrap: [App]
})
export class AppModule { }
