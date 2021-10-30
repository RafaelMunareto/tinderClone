import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  sliders: any[] = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  plan;
  constructor(
    private dataServices: DataService,
    private modalController: ModalController,
    private router: Router
  ) {
    this.sliders = this.dataServices.tinderSliders;
    this.plan = '6';
  }

  ngOnInit() {
  }
  pay() {
    this.modalController.dismiss();
    this.router.navigate(['pay']);
  }
}
