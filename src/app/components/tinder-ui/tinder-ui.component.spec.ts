import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TinderUIComponent } from './tinder-ui.component';

describe('TinderUIComponent', () => {
  let component: TinderUIComponent;
  let fixture: ComponentFixture<TinderUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinderUIComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TinderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
