import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
  activeMenu = 'msg';
  avatarSlide = {
    slidesPerView: 3.5,
    zoom: false
  };
  myMatch: any[] = [];
  constructor(
    private navCtrl: NavController,
    private dataServices: DataService,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {
    this.myMatch = this.dataServices.cards;
    console.log('match', this.myMatch);
  }

  ngOnInit() {
  }

  userProfile() {
    this.navCtrl.navigateRoot(['profile']);
  }
  backToHome() {
    this.navCtrl.navigateRoot(['home']);
  }

  changeView(view) {
    this.activeMenu = view;
  }

  selectedUser(user) {
    console.log(user);
    this.router.navigate(['inbox']);
  }
  async presentPopover() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Unmatch Mystical Dimples',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Report',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Share Profile',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Open chat',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Open profile',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
