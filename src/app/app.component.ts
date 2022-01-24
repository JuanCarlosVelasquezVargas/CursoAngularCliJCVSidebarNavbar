import {Component, ViewChild} from '@angular/core';
import {CronometroComponent} from "./cronometro/cronometro.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CursoAngularCliJCV';

  nombreEstudiante: string = 'Juan Velásquez';
  edadEstudiante: number = 33;
  horaActual: Date;
  colors: IColor[] = [
    {redSocial: 'Whatsapp', color: '#25D366'},
    {redSocial: 'Facebook', color: '#4267B2'},
    {redSocial: 'Twitter', color: '#1DA1F2'},
    {redSocial: 'Youtube', color: '#FF0000'}
  ];

  mostrarHora(evento: any){
    console.log(evento);

    this.horaActual = new Date();

    const {target} = evento;
    target.innerHTML = `Cambio la hora - ${this.horaActual.getSeconds()}`;
  }

  logAcumulador: string[] = [];

  insertLogAcumulador(log: string){
    console.log(log);
    this.logAcumulador.unshift(log)
  }

  timeStamps: number[] = [];

  aniadirVuelta($event: number) {
    this.timeStamps.unshift($event);
  }

  limpiarVueltas() {
    this.timeStamps = [];
  }

  callPhone(phone: string) {
    console.log(phone)
  }

  //@ViewChild(CronometroComponent) primerCrono: CronometroComponent
  @ViewChild('cronometroPrimero') primerCrono: CronometroComponent
  @ViewChild('cronometroSegundo') segundoCrono: CronometroComponent

  iniciarCronometro(){
    this.segundoCrono.play()
  }

  iniciarTodosCronometro(){
    this.primerCrono.play()
    this.segundoCrono.play()
  }

}
interface IColor {
  redSocial: string;
  color: string;
}
