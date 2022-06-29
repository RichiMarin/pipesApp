import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre: string = 'Ricardo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Magno';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre : 'Ricardo',
    edad   : 37,
    direccion: 'Manizales, Caldas'
  }

  //JsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela : true
    },
    {
      nombre: 'robin',
      vuela : false
    },
    {
      nombre: 'Acuaman',
      vuela : false
    }
  ]

  //Async Pipe

  miObservable = interval(1000); //0,1,2,4,5,6

  valorPromesa = new Promise( (resolve, reject)=>{

    setTimeout( ()=>{
      resolve( 'Tenemos data de promesa' );
    }, 3500 );
  
  });

}
