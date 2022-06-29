import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'ricardo';
  nombreUpper: string = 'RICARDO';
  nombreCompleto: string = 'RiCardo';

  fecha: Date = new Date(); //fecha actual

}


