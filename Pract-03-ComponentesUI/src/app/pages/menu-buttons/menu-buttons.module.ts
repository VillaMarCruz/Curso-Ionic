import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuButtonsPageRoutingModule } from './menu-buttons-routing.module';

import { MenuButtonsPage } from './menu-buttons.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuButtonsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuButtonsPage]
})
export class MenuButtonsPageModule {}
