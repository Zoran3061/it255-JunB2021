import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
let AddUserComponent = class AddUserComponent {
    constructor(_sevice) {
        this._sevice = _sevice;
    }
    ngOnInit() {
        this._initForm();
    }
    _initForm() {
        this.form = new FormGroup({
            username: new FormControl('', [
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required
            ]),
            role: new FormControl('', [
                Validators.required
            ])
        });
    }
    submitForm() {
        let user = new User(155, this.form.get('username').value, this.form.get('email').value, this.form.get('password').value, this.form.get('role').value);
        this._sevice.create(user).subscribe((res) => {
            alert('User kreiran');
        });
    }
};
AddUserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-user',
        templateUrl: './add-user.component.html',
        styleUrls: ['./add-user.component.css']
    })
], AddUserComponent);
export { AddUserComponent };
//# sourceMappingURL=add-user.component.js.map