import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HirdetesComponent } from './components/hirdetes/hirdetes.component';
import { OffersComponent } from './components/offers/offers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'newad', component: HirdetesComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
