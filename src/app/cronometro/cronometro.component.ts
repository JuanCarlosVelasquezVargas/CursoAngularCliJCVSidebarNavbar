import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})

export class CronometroComponent implements OnInit {

  //cuando hago uso del decorador Input me sirva para poder exponer la variable minutos
  @Input() minutos: number = 0;
  //cuando hago uso del decorador Input me sirva para poder exponer la variable minutos
  @Input() segundos: number = 0;
  //cuand hago uso del decorador output es para poder devolver valores
  //para esto le pongo cualquier nombre de variable, el evento markTime sirve para
  //emitir eventos personalizados de forma síncrona o asíncrona
  //y luego inicializo este evento y le doy un subtipo string
  @Output() marcarVuelta: EventEmitter<number> = new EventEmitter<number>();
  @Output() detener: EventEmitter<void> = new EventEmitter<void>();

  //Una Suscripción es un objeto que representa un recurso desechable, normalmente la ejecución de un Observable
  limpiador: Subscription = new Subscription();

  segundosAcumulador: number = 0;
  ctrlEjecuta: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.segundosAcumulador = this.minutos * 60 + this.segundos;
  }

  play():void {
    this.ctrlEjecuta = true;
    this.limpiador = timer(this.segundosAcumulador, 1000)
      .subscribe(() => {
        this.segundosAcumulador++;
      });
  }

  pause():void {
    this.ctrlEjecuta = false;
    this.limpiador.unsubscribe();
  }

  stop():void {
    this.ctrlEjecuta = false;
    this.limpiador.unsubscribe();
    this.segundosAcumulador = 0;
    this.detener.emit();
  }

  registerTime():void {
    this.marcarVuelta.emit(this.segundosAcumulador);
  }
}
