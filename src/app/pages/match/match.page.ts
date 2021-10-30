import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {
  avtar: any = '';
  name: any = '';
  constructor(
    private navParam: NavParams,
    private modalCtrl: ModalController
  ) {
    if (this.navParam.get('value')) {
      let info = JSON.parse(this.navParam.get('value'));
      this.avtar = info.img;
      this.name = info.name;
      console.log(info);
    }

  }

  ngOnInit() {
  }
  send() {
    console.log('send');
    this.modalCtrl.dismiss();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
