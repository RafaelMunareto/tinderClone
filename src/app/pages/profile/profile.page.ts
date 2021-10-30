import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { PurchasePage } from '../purchase/purchase.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  sliders: any[] = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  }
  constructor(
    private navCtrl: NavController,
    private dataServices: DataService,
    private router: Router,
    private modalController: ModalController
  ) {
    this.sliders = this.dataServices.tinderSliders;
  }

  ngOnInit() {
  }
  backToHome() {
    this.navCtrl.navigateRoot(['home']);
  }
  messgeList() {
    this.navCtrl.navigateRoot(['chat-list']);
  }
  async tinerPlus() {
    const modal = await this.modalController.create({
      component: PurchasePage,
      cssClass: 'modalContact',
      backdropDismiss: true,
      showBackdrop: true
    });

    await modal.present();
  }
  settings() {
    this.router.navigate(['settings']);
  }
  addMedia() {
    this.router.navigate(['add-media']);
  }
  editProfile() {
    this.router.navigate(['edit-profile']);
  }
}
