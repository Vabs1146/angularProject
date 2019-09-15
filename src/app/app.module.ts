import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductionformComponent } from './productionform/productionform.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { CrumDetailsComponent } from './crum-details/crum-details.component';
import { MouldRDetailsComponent } from './mould-r-details/mould-r-details.component';
import { ColorDetailsComponent } from './color-details/color-details.component';
import { PayrolDetailsComponent } from './payrol-details/payrol-details.component';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { ColorCodeComponent } from './color-code/color-code.component';
import { ColorNameComponent } from './color-name/color-name.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductionformComponent,
    SolutionDetailsComponent,
    CrumDetailsComponent,
    MouldRDetailsComponent,
    ColorDetailsComponent,
    PayrolDetailsComponent,
    DashboardDefaultComponent,
    ColorCodeComponent,
    ColorNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
