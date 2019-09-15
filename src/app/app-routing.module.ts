import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumDetailsComponent } from './crum-details/crum-details.component';
import { MouldRDetailsComponent } from './mould-r-details/mould-r-details.component';
import { PayrolDetailsComponent } from './payrol-details/payrol-details.component';
import { ProductionformComponent } from './productionform/productionform.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { ColorDetailsComponent } from './color-details/color-details.component';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { ColorCodeComponent } from './color-code/color-code.component';
import { ColorNameComponent } from './color-name/color-name.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path:'',component:LoginComponent},
      { path:'login',component:LoginComponent},
      { path:'register',component:RegisterComponent},
      { path:'dashboard',component:DashboardComponent,
        children:[
          { path:'',component:DashboardDefaultComponent},
          { path:'crum-details',component:CrumDetailsComponent},
          { path:'color-details',component:ColorDetailsComponent,
            children:[
              { path:'color-code',component:ColorCodeComponent},
              { path:'color-name',component:ColorNameComponent}
            ]
          },
          { path:'payroll-details',component:PayrolDetailsComponent},
          { path:'mouldr-details',component:MouldRDetailsComponent},
          { path:'production-form',component:ProductionformComponent},
          { path:'soution-details',component:SolutionDetailsComponent}
        ]
      }, 
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
