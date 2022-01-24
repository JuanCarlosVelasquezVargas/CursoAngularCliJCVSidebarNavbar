import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcumuladorComponent} from "./acumulador/acumulador.component";
import {CronometroComponent} from "./cronometro/cronometro.component";


const routes: Routes = [
  {path: 'acumulador', component: AcumuladorComponent},
  {path: 'cronometro', component: CronometroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: "legacy"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
