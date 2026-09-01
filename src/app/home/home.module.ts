import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { ShopModule } from '../shop/shop.module';
import { HomeThreeComponent } from './home-three/home-three.component';
import { HomeFourComponent } from './home-four/home-four.component';
import { HomeFiveComponent } from './home-five/home-five.component';
import { HomeSixComponent } from './home-six/home-six.component';
import { HomeSevenComponent } from './home-seven/home-seven.component';


@NgModule({
  declarations: [
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HomeSevenComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ShopModule,
  ]
})
export class HomeModule { }
