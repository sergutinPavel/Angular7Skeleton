// misc
import { environment } from '../environments/environment';
// libs
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// store
import { reducers, metaReducers } from './store';
import { RootEffects } from './store/root.effects';
// services
import { AuthGuard, NoAuthGuard } from './services/auth.guard';
import { TokenInterceptor } from './services/token.interceptor';
import { AuthService } from './store/auth/auth.service';
import { GeneralService } from './store/general/general.service';
// modules
import { MaterialModule } from './material.module';
import { Routing } from './app-routing.module';
// modals
import { modals } from './components/modals';
// components
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './components/layout/app-sidebar/app-sidebar.component';
import { AuthComponent } from './components/auth/module.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PageLayoutComponent } from './components/layout/page-layout/page-layout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ExampleComponent } from './components/pages/example/example.component';


@NgModule({
  declarations: [
    ...modals,
    AppComponent,
    AppSidebarComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    PageLayoutComponent,
    DashboardComponent,
    ExampleComponent
  ],
  entryComponents: [
    ...modals
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RootEffects,
    MaterialModule,
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    TokenInterceptor,
    GeneralService,
    AuthService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
