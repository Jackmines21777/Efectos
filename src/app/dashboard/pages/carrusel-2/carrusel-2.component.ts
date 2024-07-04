import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-2',
  standalone: true,
  imports: [],
  templateUrl: './carrusel-2.component.html',
  styleUrl: './carrusel-2.component.css'
})
export default class Carrusel2Component {

  abrirThe():void{
    alert('The');
  }
  abrirFlu():void{
    alert('Flu');
  }
  abrirRiv():void{
    alert('River');
  }
}
