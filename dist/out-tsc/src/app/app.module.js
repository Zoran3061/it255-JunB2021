import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfUsersComponent } from './User/list-of-users/list-of-users.component';
import { DetailUserComponent } from './User/detail-user/detail-user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ListOfUsersComponent,
            DetailUserComponent,
            AddUserComponent,
            FilterPipePipe
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map