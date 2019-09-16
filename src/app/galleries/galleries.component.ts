import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
galleries;
  constructor() { }

  ngOnInit() {
    this.galleries = [
      {
        photoUrl: 'assets/images/upc/1upc.jpg',
        title: 'Wykład UPC',
        routerLink: 'upc'
      },
      {
        photoUrl: 'assets/images/klaster/1.jpg',
        title: 'Budowa klastra obliczeniowego',
        routerLink: 'klaster'
      },
      {
        photoUrl: 'assets/images/MIT/M05_01.jpg',
        title: 'Konferencje MIT',
        routerLink: 'MIT'
      },
      {
        photoUrl: 'assets/images/Wizyta Tapio/01.jpg',
        title: 'Wizyta Tapio Kianto z Finlandii',
        routerLink: 'Tapio'
      }
    ];
  }

}
