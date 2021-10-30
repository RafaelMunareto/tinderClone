



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TinderUIComponent } from './tinder-ui/tinder-ui.component';
import { LikesComponent } from './likes/likes.component';

const components = [
    TinderUIComponent,
    LikesComponent,
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ...components,
    ]
})
export class ComponentModule { }
