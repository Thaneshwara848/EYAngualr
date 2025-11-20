import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { ServicesdemoComponent } from './servicesdemo/servicesdemo.component';
import { FullstackComponent } from './fullstack/fullstack.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'comp',component:ComponentsComponent},
  { path:'data' ,component:DatabindComponent},
  { path:'dir',component:DirectivesComponent},
  { path:'login',component:LoginComponent},
  {path :'signup',component:SignupComponent},
  {path :'pipe',component:PipedemoComponent},
  {path:'forms',component:FormsdemoComponent},
  {path :'serv',component:ServicesdemoComponent},
  { path:'intgration',component:FullstackComponent},
  // this must be alsway last 
  { path :'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
