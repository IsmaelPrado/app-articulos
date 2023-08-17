import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CargararticuloComponent } from './Components/cargararticulo/cargararticulo.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cargararticulo', component: CargararticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
