import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'comp',component:ComponentsComponent},
  { path:'data' ,component:DatabindComponent},
  { path:'dir',component:DirectivesComponent},
  { path:'login',component:LoginComponent},
  {path :'signup',component:SignupComponent},
  { path :'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
