import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PurchasePage } from 'src/app/pages/purchase/purchase.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {
  viewMenu = '';
  likedMe: any[] = [];
  topPicks: any[] = [];
  constructor(
    private chMod: ChangeDetectorRef,
    private dataService: DataService,
    private modalController: ModalController
  ) {
    this.viewMenu = 'likes';
    this.likedMe = this.dataService.likedMe;
    this.topPicks = this.dataService.cards;
    console.log('liked', this.likedMe);
  }

  ngOnInit() { }
  changeView(menu) {
    this.viewMenu = menu;
    this.chMod.detectChanges();
  }

  async onSee() {

    const modal = await this.modalController.create({
      component: PurchasePage,
      cssClass: 'modalContact',
      backdropDismiss: true,
      showBackdrop: true
    });

    await modal.present();
  }
  unlock() {
    this.onSee();
  }
}
