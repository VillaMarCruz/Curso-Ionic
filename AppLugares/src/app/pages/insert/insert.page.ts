import { Component, OnInit } from '@angular/core';
import { Lugares } from '../../interfaces/lugares';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  lugar: Lugares = {
    id: 0,
    avatar: '',
    titulo: '',
    descripcion: '',
    comentarios: []
  };

  opcion = 'insertar';

  constructor(
    private lugarService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    if(!id){
      this.opcion = 'insertar';
    }else{
      this.lugar = this.lugarService.detalle(id);
      this.opcion = 'editar';
    }
  }

  onSubmit(){
    if(this.opcion === 'insertar'){
      this.lugarService.guardar(this.lugar);
    }else{
      const id = Number(this.activatedRoute.snapshot.params.id);
      this.lugarService.actualizar(id, this.lugar);
    }
    this.router.navigate(['/list']);
  }
}
