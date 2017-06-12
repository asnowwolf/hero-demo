import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './heroes/list/list.component';
import { LayoutComponent } from './heroes/layout/layout.component';
import { HeroShowComponent } from './heroes/show/show.component';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
  ],
  declarations: [HeroListComponent, LayoutComponent, HeroShowComponent],
})
export class HeroModule {
}
