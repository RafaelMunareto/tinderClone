import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TroublePage } from './trouble.page';

describe('TroublePage', () => {
  let component: TroublePage;
  let fixture: ComponentFixture<TroublePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroublePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TroublePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
