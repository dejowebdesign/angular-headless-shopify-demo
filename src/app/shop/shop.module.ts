import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { ProductSmItemComponent } from './product-sm-item/product-sm-item.component';
import { OfferSmProductSliderComponent } from './offer-sm-product-slider/offer-sm-product-slider.component';
import { SaleOfProductsComponent } from './sale-of-products/sale-of-products.component';
import { ProductItemTwoComponent } from './product-item-two/product-item-two.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CategoryFilterComponent } from './filtering/category-filter/category-filter.component';
import { PriceFilterComponent } from './filtering/price-filter/price-filter.component';
import { SizeFilteringComponent } from './filtering/size-filtering/size-filtering.component';
import { ColorFilteringComponent } from './filtering/color-filtering/color-filtering.component';
import { BrandFilteringComponent } from './filtering/brand-filtering/brand-filtering.component';
import { FeatureProductsComponent } from './widget/feature-products/feature-products.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ShopAreaComponent } from './shop-area/shop-area.component';
import { ShopRightSidebarComponent } from './pages/shop-right-sidebar/shop-right-sidebar.component';
import { ShopFourColComponent } from './pages/shop-four-col/shop-four-col.component';
import { ShopThreeColComponent } from './pages/shop-three-col/shop-three-col.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { ProductDetailsAreaComponent } from './product-details-area/product-details-area.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { DynamicShopDetailsComponent } from './pages/dynamic-shop-details/dynamic-shop-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CompareComponent } from './pages/compare/compare.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductBannerComponent,
    ShopCategoryComponent,
    ProductSmItemComponent,
    OfferSmProductSliderComponent,
    SaleOfProductsComponent,
    ProductItemTwoComponent,
    ShopComponent,
    CategoryFilterComponent,
    PriceFilterComponent,
    SizeFilteringComponent,
    ColorFilteringComponent,
    BrandFilteringComponent,
    FeatureProductsComponent,
    ProductListItemComponent,
    ShopAreaComponent,
    ShopRightSidebarComponent,
    ShopFourColComponent,
    ShopThreeColComponent,
    ShopDetailsComponent,
    ProductDetailsAreaComponent,
    RelatedProductsComponent,
    DynamicShopDetailsComponent,
    CartComponent,
    WishlistComponent,
    CompareComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ShopRoutingModule,
    NgxSliderModule,
    FormsModule,
  ],
  exports:[
    ProductItemComponent,
    ProductBannerComponent,
    ShopCategoryComponent,
    ProductSmItemComponent,
    OfferSmProductSliderComponent,
    SaleOfProductsComponent,
    ProductItemTwoComponent,
    ShopComponent,
  ]
})
export class ShopModule { }
