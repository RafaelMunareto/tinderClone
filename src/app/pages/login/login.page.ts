import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  phone() {
    this.router.navigate(['login-with-phone']);
  }
  fb() {
    this.navCtrl.navigateRoot(['home']);
  }
  trub() {
    this.router.navigate(['trouble']);
  }
}
