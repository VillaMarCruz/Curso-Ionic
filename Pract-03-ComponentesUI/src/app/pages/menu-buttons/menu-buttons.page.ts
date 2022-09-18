import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.page.html',
  styleUrls: ['./menu-buttons.page.scss'],
})
export class MenuButtonsPage implements OnInit {

  constructor(private menu: MenuController) { }
  ngOnInit(): void {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
