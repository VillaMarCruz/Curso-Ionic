import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuButtonsPage } from './menu-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: MenuButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuButtonsPageRoutingModule {}
