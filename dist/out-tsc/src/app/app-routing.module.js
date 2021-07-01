import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListOfUsersComponent } from './User/list-of-users/list-of-users.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { DetailUserComponent } from './User/detail-user/detail-user.component';
const routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: ListOfUsersComponent },
    { path: 'add-new', component: AddUserComponent },
    { path: 'user/:id', component: DetailUserComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map