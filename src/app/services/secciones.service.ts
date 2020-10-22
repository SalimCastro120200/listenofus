import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Secciones } from '../models/secciones';

@Injectable()
export class SeccionesService {
  seccionesList: AngularFireList<any>;
  selectSeciones: Secciones = new Secciones();

  constructor(private firebase: AngularFireDatabase) { }

  getSecciones(){
    return this.seccionesList = this.firebase.list('secciones');
  }

  insertSecciones(secciones: Secciones){
    this.seccionesList.push({
      nombre: secciones.nombre,
      descripcion: secciones.descripcion
    });
  }
}
