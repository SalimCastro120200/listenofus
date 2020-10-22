import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Usuarios } from '../models/usuarios';


export class UsuariosService {

  usuariosList: AngularFireList<any>;
  selectUsuarios: Usuarios = new Usuarios();

  constructor(private firebase: AngularFireDatabase) { }

  getUsuarios(){
    return this.usuariosList = this.firebase.list('usuarios');
  }

  insertUsuarios(usuarios: Usuarios){
    this.usuariosList.push({
      nombre: usuarios.nombre,
      correo: usuarios.correo,
      password: usuarios.password,
      carrera: usuarios.carrera,
      cuatrimestre: usuarios.cuatrimestre,
      grupo: usuarios.grupo,
      matricula: usuarios.matricula
    });
  }
}
