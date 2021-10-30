import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  buynow() {
    this.navCtrl.navigateRoot(['home']);
    swal.fire({
      title: 'Success',
      text: 'Your Plan Activated successfully',
      icon: 'success',
      backdrop: false,
    });
  }
}
