import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevformComponent } from './components/devform/devform.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatedevformComponent } from './components/updatedevform/updatedevform.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'devform', component: DevformComponent},
  {path: 'updatedevform', component: UpdatedevformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
