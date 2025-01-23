import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  evento = new FormControl('');
  fechai = new FormControl('');
  fechafin = new FormControl('');
  ubicacion = new FormControl('');
  encargado = new FormControl('');
  telefono = new FormControl('');

  items: any = [];

  agregar() {
    if (this.evento.value && this.fechai.value && this.fechafin.value && this.ubicacion.value && this.encargado.value && this.telefono.value) {
      this.items.push({ evento: this.evento.value, fechai: this.fechai.value, fechafin: this.fechafin.value, ubicacion: this.ubicacion.value, encargado: this.encargado.value, telefono: this.telefono.value });
      this.evento.setValue('');
      this.fechai.setValue('');
      this.fechafin.setValue('');
      this.ubicacion.setValue('');
      this.encargado.setValue('');
      this.telefono.setValue('');
    }
    else {
      alert('Complete los datos requeridos');
    }
  }
  constructor() { }

}
