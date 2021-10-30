import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.page.html',
  styleUrls: ['./login-with-email.page.scss'],
})
export class LoginWithEmailPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {

  }

  ngOnInit() {
  }
  sentEmail() {
    this.navCtrl.navigateRoot(['login']);
  }
}
