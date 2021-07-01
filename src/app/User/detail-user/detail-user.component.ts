import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  id: number = null;
  user: User = null;
  fetchDone: boolean = false;

  constructor(private _service: UserService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((res => {
      this.id = parseInt(res['id']);
      this._getUser(this.id);
    }))
  }

  private _getUser(id) {
    this._service.getOneByID(id).subscribe((res: User) => {
      this.user = res;
      this.fetchDone = true;
    }, err => {
      this.user = null;
      this.fetchDone = true;
    }, () => {
      console.log('Izvrseno');
    })
  }

  deleteUser(id:number){
    this._service.delete(id);
    alert("Uspesno izbrisan");
  }
}
