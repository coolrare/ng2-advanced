import {NgForm} from '@angular/forms';
import {ViewChild, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(NgForm) form: NgForm;

  username: string;
  password: string;

  login() {

  }

}
