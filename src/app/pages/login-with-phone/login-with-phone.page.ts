import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-with-phone',
  templateUrl: './login-with-phone.page.html',
  styleUrls: ['./login-with-phone.page.scss'],
})
export class LoginWithPhonePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onLogin() {
    this.router.navigate(['verify']);
  }
}
