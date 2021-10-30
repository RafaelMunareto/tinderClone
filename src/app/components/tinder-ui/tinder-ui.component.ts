import { Component, Input, ViewChildren, QueryList, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MatchPage } from 'src/app/pages/match/match.page';
import { PurchasePage } from 'src/app/pages/purchase/purchase.page';
import { Router, NavigationExtras } from '@angular/router';




@Component({
  selector: 'app-tinder-ui',
  templateUrl: './tinder-ui.component.html',
  styleUrls: ['./tinder-ui.component.scss'],
})
export class TinderUIComponent {
  @Input('cards') cards: Array<{
    img: string,
    title: string,
    description: string
  }>;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
  heartVisible: boolean;
  crossVisible: boolean;
  matchFound: boolean = false;
  haveSuperLike: boolean;
  constructor(
    private renderer: Renderer2,
    private modalController: ModalController,
    private router: Router) {
  }

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart) {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)');
      this.toggleChoiceIndicator(false, true);
      this.emitChoice(heart, this.cards[0]);
    } else {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)');
      this.toggleChoiceIndicator(true, false);
      this.emitChoice(heart, this.cards[0]);
    };
    this.shiftRequired = true;
    this.transitionInProgress = true;
  };

  handlePan(event) {

    if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.cards.length) return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) { this.toggleChoiceIndicator(false, true) }
    if (event.deltaX < 0) { this.toggleChoiceIndicator(true, false) }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');

    this.shiftRequired = true;

  };

  handlePanEnd(event) {

    this.toggleChoiceIndicator(false, false);

    if (!this.cards.length) return;

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {

      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', '');
      this.shiftRequired = false;

    } else {

      let endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');

      this.shiftRequired = true;

      this.emitChoice(!!(event.deltaX > 0), this.cards[0]);
    }
    this.transitionInProgress = true;
  };

  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  };

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    }
  }

  async presentModal(card) {
    this.matchFound = false;
    const modal = await this.modalController.create({
      component: MatchPage,
      componentProps: { value: JSON.stringify(card) }
    });

    await modal.present();

  }
  async openPurchase() {
    this.matchFound = false;
    const modal = await this.modalController.create({
      component: PurchasePage,
      cssClass: 'modalContact',
      backdropDismiss: true,
      showBackdrop: true
    });

    await modal.present();
  }
  emitChoice(heart, card) {
    if (this.matchFound && heart) {
      console.log('open modal');
      this.presentModal(card);
      return false;
    }
    console.log('card', card);
    console.log('heart', heart);
    this.matchFound = heart;
    this.choiceMade.emit({
      choice: heart,
      payload: card
    });
  }


  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
  }

  superLike() {
    this.haveSuperLike = true;
    setTimeout(() => {
      this.haveSuperLike = false;
    }, 1000);
  }
  openInfo(card) {
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(card)
      }
    };
    console.log(card);
    this.router.navigate(['info'], navData);
  }
}
