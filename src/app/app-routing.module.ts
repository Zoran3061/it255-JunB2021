import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfUsersComponent } from './User/list-of-users/list-of-users.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { DetailUserComponent } from './User/detail-user/detail-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ListOfUsersComponent },
  { path: 'add-new', component: AddUserComponent },
  { path: 'user/:id', component: DetailUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
