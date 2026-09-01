import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { HomeFourComponent } from './home-four/home-four.component';
import { HomeFiveComponent } from './home-five/home-five.component';
import { HomeSixComponent } from './home-six/home-six.component';
import { HomeSevenComponent } from './home-seven/home-seven.component';


const routes: Routes = [
  {
    path:'home-style-1',
    component:HomeOneComponent,
    title:'Outstock - Clean, Minimal eCommerce Angular Template',
  },
  {
    path:'home-style-2',
    component:HomeTwoComponent,
    title:'Home page two',
  },
  {
    path:'home-style-3',
    component:HomeThreeComponent,
    title:'Home page three',
  },
  {
    path:'home-style-4',
    component:HomeFourComponent,
    title:'Home page four',
  },
  {
    path:'home-style-5',
    component:HomeFiveComponent,
    title:'Home page five',
  },
  {
    path:'home-style-6',
    component:HomeSixComponent,
    title:'Home page six',
  },
  {
    path:'home-style-7',
    component:HomeSevenComponent,
    title:'Home page seven',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
