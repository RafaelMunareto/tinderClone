import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  myprofile: any[] = [
    {
      img: 'assets/images/9.png',
    },
    {
      img: 'assets/images/7.png',
    },
    {
      img: '',
    },
    {
      img: '',
    },
    {
      img: '',
    },
    {
      img: '',
    },
    {
      img: '',
    },
    {
      img: '',
    },
    {
      img: '',
    }
  ];
  constructor(
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
  }
  addMedia() {

  }
  async openGender() {
    const alert = await this.alertController.create({
      header: 'I am',

      inputs: [
        {
          name: 'Man',
          type: 'radio',
          label: 'Man',
          value: 'value1',
          checked: true
        },
        {
          name: 'Woman',
          type: 'radio',
          label: 'Woman',
          value: 'value2'
        },
        {
          name: 'Others',
          type: 'radio',
          label: 'Others',
          value: 'value3'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async openOrientation() {
    const alert = await this.alertController.create({
      header: 'Sexual orientation',
      subHeader: 'Select up to 3',
      inputs: [
        {
          name: 'Straight',
          type: 'checkbox',
          label: 'Straight',
          value: 'value1',
          checked: true
        },

        {
          name: 'Gay',
          type: 'checkbox',
          label: 'Gay',
          value: 'value2'
        },

        {
          name: 'Lesbian',
          type: 'checkbox',
          label: 'Lesbian',
          value: 'value3'
        },

        {
          name: 'Bisexual',
          type: 'checkbox',
          label: 'Bisexual',
          value: 'value4'
        },

        {
          name: 'Asexual',
          type: 'checkbox',
          label: 'Asexual',
          value: 'value5'
        },

        {
          name: 'Queer',
          type: 'checkbox',
          label: 'Queer',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
