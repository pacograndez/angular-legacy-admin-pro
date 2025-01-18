import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: Array<any> = [];

  constructor() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        subMenu: [
          { title: 'Main', url: '/' },
          { title: 'Progress', url: '/dashboard/progress' },
          { title: 'Grafica', url: '/dashboard/grafica' },
          { title: 'Promise', url: '/dashboard/promise' },
          { title: 'RxJS', url: '/dashboard/rxjs' },
        ]
      },
    ]
  }
}
