import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopRightSidebarComponent } from './pages/shop-right-sidebar/shop-right-sidebar.component';
import { ShopFourColComponent } from './pages/shop-four-col/shop-four-col.component';
import { ShopThreeColComponent } from './pages/shop-three-col/shop-three-col.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { DynamicShopDetailsComponent } from './pages/dynamic-shop-details/dynamic-shop-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CompareComponent } from './pages/compare/compare.component';
import { SearchComponent } from './pages/search/search.component';



const routes: Routes = [
  {
    path:'',
    component:ShopComponent,
    title:'Shop Page'
  },
  {
    path:'shop-right',
    component:ShopRightSidebarComponent,
    title:'Shop Right Page'
  },
  {
    path:'shop-4-col',
    component:ShopFourColComponent,
    title:'Shop Four Col Page'
  },
  {
    path:'shop-3-col',
    component:ShopThreeColComponent,
    title:'Shop Three Col Page'
  },
  {
    path:'shop-details',
    component:ShopDetailsComponent,
    title:'Shop Details Page'
  },
  {
    path:'shop-details/:id',
    component:DynamicShopDetailsComponent,
    title:'Shop Details Page'
  },
  {
    path:'cart',
    component:CartComponent,
    title:'Shop Cart Page'
  },
  {
    path:'wishlist',
    component:WishlistComponent,
    title:'Shop Wishlist Page'
  },
  {
    path:'compare',
    component:CompareComponent,
    title:'Shop Compare Page'
  },
  {
    path:'search',
    component:SearchComponent,
    title:'Shop Search Page'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
