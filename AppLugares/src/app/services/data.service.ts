/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Comentario, Lugares } from '../interfaces/lugares';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private listalugares: Lugares[] = [
    {
      id: 1,
      // eslint-disable-next-line max-len
      avatar: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
      titulo: 'Paris',
      descripcion: 'París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura.',
      comentarios: [
        {
          nombre: 'Marlon Villamar',
          descripcion: 'Bonito lugar si he ido'
        }
      ]
    },
    {
      id: 2,
      // eslint-disable-next-line max-len
      avatar: 'https://h2gconsulting.com/wp-content/uploads/2020/01/Espan%CC%83a-puerta-al-mercado-europeo-scaled-1.jpg',
      titulo: 'España',
      descripcion: 'Lugar hermoso',
      comentarios: [
        {
          nombre: 'Carlos Fuente',
          descripcion: 'Bonito lugar si he ido'
        }
      ]
    },
    {
      id: 3,
      // eslint-disable-next-line max-len
      avatar: 'https://exportou.com/wp-content/uploads/2018/12/MEXICO.jpg',
      titulo: 'Mexico',
      descripcion: 'Lugar hermosoMéxico es un país entre los Estados Unidos y América Central, conocido por las playas en el Pacífico y el golfo de México, y su diverso paisaje de montañas, desiertos y selvas.',
      comentarios: [
        {
          nombre: 'Carlos Fuente',
          descripcion: 'Bonito lugar si he ido'
        }
      ]
    }
  ];

  constructor() { }

  public lista(){
    return this.listalugares;
  }

  public detalle(identificador: number){
    const lugarEncontrado = this.listalugares.find((lugar) => lugar.id === identificador);
    return lugarEncontrado;
  }

  public eliminar(identificador: number){
    const posicion = this.listalugares.findIndex((lugar) => lugar.id === identificador);
    this.listalugares.splice(posicion, 1);
  }

  public guardar(lugar: Lugares){
      const lugarAnterior = this.listalugares[this.listalugares.length-1];
      lugar.id = lugarAnterior.id + 1;
      this.listalugares.push(lugar);
  }

  public actualizar(identificador: number, lugarNuevo: Lugares){
    const lugarEncontrado = this.detalle(identificador);

    lugarEncontrado.avatar = lugarNuevo.avatar;
    lugarEncontrado.titulo = lugarNuevo.titulo;
    lugarEncontrado.descripcion = lugarNuevo.descripcion;
  }

  public guardarComentario(identificador: number, comentario: Comentario){
    const lugarEncontrado = this.detalle(identificador);
    lugarEncontrado.comentarios.push(comentario);
  }

}
