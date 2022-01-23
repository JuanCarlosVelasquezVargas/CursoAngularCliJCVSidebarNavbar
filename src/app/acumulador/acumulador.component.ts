import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})

export class AcumuladorComponent implements OnInit {

  //cuando hago uso del decorador Input me sirva para poder exponer la variable contador
  @Input() contador: number = 0;
  //le voy a poner un alias a esta variable, le voy a dar el alisas de acm
  @Input('acm') acumulador: number = 0;

  //cuand hago uso del decorador output es para poder devolver valores
  //para esto le pongo cualquier nombre de variable, el evento EventEmitter sirve para
  //emitir eventos personalizados de forma síncrona o asíncrona
  //y luego inicializo este evento y le doy un subtipo string
  @Output() eventoClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    //this.acumulador++;
  }

  //voy a crear una función que se va a llamar cambio valor
  cambiarValor(valor:number){
    this.contador = this.contador + valor;
    this.eventoClick.emit(`Incremento -o- Decremento: ${valor}`)
  }

}
