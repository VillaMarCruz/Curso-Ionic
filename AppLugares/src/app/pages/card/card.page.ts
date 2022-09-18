import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Lugares, Comentario } from '../../interfaces/lugares';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  lugar: Lugares;

  constructor(
    private alertController: AlertController,
    private lugaresService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.lugar = this.lugaresService.detalle(id);
  }

  onDelete() {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.lugaresService.eliminar(id);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Estas seguro de eliminar?!',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Sí',
          handler: () => {
            this.onDelete();
            this.router.navigate(['/list']);
          },
        },
      ],
    });
    await alert.present();
  }

  onComentario(comentario: Comentario){
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.lugaresService.guardarComentario(id, comentario);
  }

  async alertaComentario() {
    const alert = await this.alertController.create({
      header: 'Comentarios',
      buttons: [
        {
          text: 'Comentar',
          handler: (comentario: Comentario) => {
            console.log(comentario);
            this.onComentario(comentario);
          },
        },
      ],
      inputs: [
        {
          id: 'nombre',
          name: 'nombre',
          placeholder: 'Nombre',
        },
        {
          id: 'descripcion',
          name: 'descripcion',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
