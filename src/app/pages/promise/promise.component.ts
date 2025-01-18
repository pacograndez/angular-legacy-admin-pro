import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styles: [
  ]
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* const promise = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola munndo!')
      } else {
        reject('Algo salió mal!!')
      }
    });

    promise.then((mensaje) => {
      console.log(mensaje)
    }).catch(error => console.log('Error en mi promesa', error));

    console.log('Fin OnInit'); */

    this.getUsers().then(users => console.log(users));
  }


  getUsers() {

    const promise = new Promise((resolve) => {
      fetch('https://reqres.in/api/users').then(res => res.json()).then(body => resolve(body.data));
    });

    return promise;
  }

}
