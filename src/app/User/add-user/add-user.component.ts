import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public form: FormGroup;

  constructor(private _sevice : UserService) { }

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
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
    })
  }

  public submitForm() {
    let user = new User(155,this.form.get('username').value, this.form.get('email').value, this.form.get('password').value, this.form.get('role').value);
    this._sevice.create(user).subscribe((res) => {
      alert('User kreiran');
    })
  }
}
