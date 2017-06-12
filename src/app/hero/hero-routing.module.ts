import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './heroes/layout/layout.component';
import { HeroListComponent } from './heroes/list/list.component';
import { HeroShowComponent } from './heroes/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HeroListComponent,
      },
      {
        path: ':id',
        component: HeroShowComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {
}
