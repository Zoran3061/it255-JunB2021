import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DetailUserComponent = class DetailUserComponent {
    constructor(_service, _route) {
        this._service = _service;
        this._route = _route;
        this.id = null;
        this.user = null;
        this.fetchDone = false;
    }
    ngOnInit() {
        this._route.params.subscribe((res => {
            this.id = parseInt(res['id']);
            this._getUser(this.id);
        }));
    }
    _getUser(id) {
        this._service.getOneByID(id).subscribe((res) => {
            this.user = res;
            this.fetchDone = true;
        }, err => {
            this.user = null;
            this.fetchDone = true;
        }, () => {
            console.log('Izvrseno');
        });
    }
    deleteUser(id) {
        this._service.delete(id);
        alert("Uspesno izbrisan");
    }
};
DetailUserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail-user',
        templateUrl: './detail-user.component.html',
        styleUrls: ['./detail-user.component.css']
    })
], DetailUserComponent);
export { DetailUserComponent };
//# sourceMappingURL=detail-user.component.js.map