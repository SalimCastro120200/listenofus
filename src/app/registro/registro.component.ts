import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//services
import { UsuariosService } from '../services/usuarios.service';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios();
    this.resetForm();
  }

  onSubmit(usuariosForm: NgForm){
    if(usuariosForm.value.$key == null){
      this.usuariosService.insertUsuarios(usuariosForm.value);
    }else{
    this.resetForm(usuariosForm);
    }
  }

  resetForm(usuariosForm?: NgForm)
  {
    if(usuariosForm != null){
      usuariosForm.reset();
      this.usuariosService.selectUsuarios = new Usuarios();
    }
  }

}
