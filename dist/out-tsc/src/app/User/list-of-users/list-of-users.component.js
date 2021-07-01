import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListOfUsersComponent = class ListOfUsersComponent {
    constructor(UserService) {
        this.UserService = UserService;
        this.users = [];
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.UserService.getAll().subscribe((res) => {
            this.users = res;
        });
        console.log(this.users);
    }
};
ListOfUsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-of-users',
        templateUrl: './list-of-users.component.html',
        styleUrls: ['./list-of-users.component.css']
    })
], ListOfUsersComponent);
export { ListOfUsersComponent };
//# sourceMappingURL=list-of-users.component.js.map