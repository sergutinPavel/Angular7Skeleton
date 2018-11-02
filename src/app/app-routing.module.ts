import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard, NoAuthGuard} from './services/auth.guard';

// components
import { AuthComponent } from './components/auth/module.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PageLayoutComponent } from './components/layout/page-layout/page-layout.component';
import { AppSidebarComponent } from './components/layout/app-sidebar/app-sidebar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ExampleComponent } from './components/pages/example/example.component';


export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent, canActivate: [NoAuthGuard], canActivateChild: [NoAuthGuard], children: [
            {path: '', redirectTo: '/auth/sign-in', pathMatch: 'full'},
            {path: 'sign-in', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            // {path: 'reset', component: PasswordResetComponent},
            {path: '**', redirectTo: '/auth/sign-in', pathMatch: 'full'}
        ]},
    {path: '', component: PageLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
            {path: '', component: AppSidebarComponent, outlet: 'navbar'},
            // {path: '', component: LeftBarComponent, outlet: 'leftbar'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'example', component: ExampleComponent}
        ]},
    {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
