import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cards = [
    {
      img: 'assets/images/1.png',
      name: 'Super Giggles',
      description: 'CEO at FACEBOOK'
    },
    {
      img: 'assets/images/2.png',
      name: 'Mystical Dimples',
      description: 'CEO at Instagram'
    },
    {
      img: 'assets/images/3.png',
      name: 'Secret Giggle',
      description: 'CEO at LinkedIn'
    },
    {
      img: 'assets/images/4.png',
      name: 'Rainbow Sweety',
      description: 'CEO at Google'
    },
    {
      img: 'assets/images/5.png',
      name: 'Princess Fuzzie',
      description: 'CEO at Microsoft'
    },
    {
      img: 'assets/images/6.png',
      name: 'Tonight Gamer',
      description: 'CEO at Alibaba'
    },
    {
      img: 'assets/images/7.png',
      name: 'Bad Captain',
      description: 'CEO at Tesla'
    },
    {
      img: 'assets/images/8.png',
      name: 'Deal Looser',
      description: 'CEO at Paypal'
    },
    {
      img: 'assets/images/9.png',
      name: 'Bad Chatty',
      description: 'CEO at Oracle'
    },
    {
      img: 'assets/images/10.png',
      name: 'Gamer Simmer',
      description: 'CEO at Apple'
    },
  ];

  public likedMe = [
    {
      img: 'assets/images/4.png',
      name: 'Rainbow Sweety',
      description: 'CEO at Google'
    },
    {
      img: 'assets/images/10.png',
      name: 'Gamer Simmer',
      description: 'CEO at Apple'
    },
  ];

  public tinderSliders = [
    {
      img: 'assets/tinder_gold.png',
      title: 'GET TINDER GOLD',
      subTitle: 'See who likes you & more!'
    },
    {
      img: 'assets/boost.png',
      title: 'GET MATCHES FASTER',
      subTitle: 'Boost your profile once a month!'
    },
    {
      img: 'assets/superlike.png',
      title: 'STAND OUT WITH SUPER LIKES',
      subTitle: `You're 3 times more likely to get a match`
    },
    {
      img: 'assets/pin.png',
      title: 'SWIPE AROUND THE WORLD!',
      subTitle: 'Passport to anywhere with tinder plus'
    },
    {
      img: 'assets/key.png',
      title: 'CONTROL YOUR PROFILE',
      subTitle: 'Limit what others see with tinder plus',
    },
    {
      img: 'assets/refresh.png',
      title: 'I MENT TO SWIPE RIGHT',
      subTitle: 'Get unlimited Rewinds with tinder plus',
    },
    {
      img: 'assets/like.png',
      title: 'INCREASE YOUR CHANCES',
      subTitle: 'Get unlimited likes with tinder plus',
    },
  ];

  public messages = [
    {
      side: 'left',
      msg: 'Hello'
    },
    {
      side: 'right',
      msg: 'Hii'
    },
    {
      side: 'left',
      msg: 'Are you nearby ?'
    },
    {
      side: 'right',
      msg: 'I will be there in few mins'
    },
    {
      side: 'left',
      msg: 'Ok, I am waiting at vinmark Store'
    },
    {
      side: 'right',
      msg: 'Sorry I am stuck in traffic. Please give me a moment.'
    }
  ];
  constructor() { }

}
