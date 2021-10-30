import { Component, ChangeDetectorRef } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { DataService } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards;
  activeMenu = '';
  constructor(
    private util: UtilsService,
    private dataServices: DataService,
    private chMod: ChangeDetectorRef,
    private navCtrl: NavController
  ) {
    this.activeMenu = 'cards';
    this.cards = [];
    this.util.show();
    setTimeout(() => {
      this.util.hide();
      this.loadTinderCards();
    }, 1000);
  }
  loadTinderCards() {
    this.cards = this.dataServices.cards;
    console.log('card', this.cards);
  };
  choiceMade(event) {

  }
  changeView(menu) {
    this.activeMenu = menu;
    this.chMod.detectChanges();
  }
  profile() {
    this.navCtrl.navigateRoot(['profile']);
  }
  openChat() {
    this.navCtrl.navigateRoot(['chat-list']);
  }
}
