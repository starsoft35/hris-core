import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule as DashboardModule } from 'projects/dashboard/src/app/app.module';
import { AppModule as LoginModule } from 'projects/login/src/app/app.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({})
class DashboardSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: []
    }
  }
}

@NgModule({})
export class LoginSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: []
    }
  }
}
const routes: Routes = [
  {path: 'login', 
   loadChildren: '../../project/login/src/app/app.module#LoginSharedModule'},
  {path: 'dashboard', 
   loadChildren: '../../projects/dashboard/src/app/app.module#AppModule'},
  { path: '',component:AppComponent}// redirectTo: '/login'}
 ];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    //AppRoutingModule,
    LoginSharedModule.forRoot(),
    DashboardSharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
