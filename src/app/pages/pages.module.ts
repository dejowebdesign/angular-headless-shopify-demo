import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogLeftSideComponent } from './blog-left-side/blog-left-side.component';
import { BlogNoSideComponent } from './blog-no-side/blog-no-side.component';
import { BlogTwoColComponent } from './blog-two-col/blog-two-col.component';
import { BlogThreeColComponent } from './blog-three-col/blog-three-col.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogDynamicDetailsComponent } from './blog-dynamic-details/blog-dynamic-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogLeftSideComponent,
    BlogNoSideComponent,
    BlogTwoColComponent,
    BlogThreeColComponent,
    BlogDetailsComponent,
    BlogDynamicDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ContactComponent,
    AccountComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
