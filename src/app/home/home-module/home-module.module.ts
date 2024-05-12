import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './home-module.component';
import { Card1Component } from '../card1/card1.component';
import { Card2Component } from '../card2/card2.component';
import { NewsletterComponent } from '../../shared/newsletter/newsletter.component';
import { TopPlacesComponent } from '../top-places/top-places.component';
import { TrendingComponent } from '../trending/trending.component';
import { ServicesComponent } from '../services/services.component';
import { BannerComponent } from '../banner/banner.component';


const routes = [
  { path: '', component: HomeModuleComponent }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  declarations: [HomeModuleComponent,Card1Component,Card2Component,NewsletterComponent,TopPlacesComponent,TrendingComponent,ServicesComponent,BannerComponent]
})
export class HomeModuleModule { }
