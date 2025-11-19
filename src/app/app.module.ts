import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { DatabindComponent } from './databind/databind.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ComponentsComponent } from './components/components.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { TempletdriveformComponent } from './templetdriveform/templetdriveform.component';
import { ReactivedriveformComponent } from './reactivedriveform/reactivedriveform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    DatabindComponent,
    SignupComponent,
    LoginComponent,
    ComponentsComponent,
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    FormsdemoComponent,
    TempletdriveformComponent,
    ReactivedriveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
