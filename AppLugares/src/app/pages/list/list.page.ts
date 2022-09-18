import { Component, OnInit } from '@angular/core';
import { Lugares } from 'src/app/interfaces/lugares';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  lugares: Lugares[] = [];

  constructor(
    private lugaresService: DataService
  ) { }

  ngOnInit() {
    this.obtenerLugares();
  }

  obtenerLugares(){
    this.lugares = this.lugaresService.lista();
  }
}
