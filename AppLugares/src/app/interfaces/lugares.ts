// Generated by https://quicktype.io

export interface Lugares {
  id:          number;
  avatar:      string;
  titulo:      string;
  descripcion: string;
  comentarios: Comentario[];
}

export interface Comentario {
  nombre:      string;
  descripcion: string;
}
