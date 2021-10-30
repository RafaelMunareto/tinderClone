import { Component, OnInit } from '@angular/core';
import { PurchasePage } from '../purchase/purchase.page';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  async openPurchase() {
    const modal = await this.modalController.create({
      component: PurchasePage,
      cssClass: 'modalContact',
      backdropDismiss: true,
      showBackdrop: true
    });

    await modal.present();
  }
  logout() {
    this.navCtrl.navigateRoot(['login']);
  }
}
