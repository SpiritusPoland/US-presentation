import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items;
  studies;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'dr hab. Piotr Porwik',
        routerLink: 'employees/dr-hab-Piotr-Porwik'
      },
      {
        label: 'dr inż. Rafał Doroz',
        routerLink: 'employees/dr-inz-Rafal-Doroz'
      },
      {
        label: 'dr inż. Przemysław Kudłacik',
        routerLink: 'employees/dr-inz-Przemyslaw-Kudlacik'
      },
      {
        label: 'dr hab. inż. Bartłomiej Płaczek',
        routerLink: 'employees/dr-hab-inz-Bartlomiej-Placzek'

      },
      {
        label: 'dr Krzysztof Wróbel',
        routerLink: 'employees/dr-Krzysztof-Wrobel'
      },
      {
        label: 'dr inż. Jarosław Zyguła',
        routerLink: 'employees/dr-inz-Jaroslaw-Zygula'
      },
      {
        label: 'dr inż. Tomasz Orczyk',
        routerLink: 'employees/dr-inz-Tomasz-Orczyk'
      },
      {
        label: 'mgr inż. Tomasz Wesołowski',
        routerLink: 'employees/mgr-inz-Tomasz-Wesolowski'
      },
      {
        label: 'mgr Marcin Cholewa',
        routerLink: 'employees/mgr-Marcin-Cholewa'
      },
      {
        label: 'mgr Marcin Lewandowski',
        routerLink: 'employees/mgr-Marcin-Lewandowski'
      },
      {
        label: 'mgr Hossein Safaverdi',
        routerLink: 'employees/mgr-Hossein-Safaverdi'
      }
    ];
    this.studies = [
      {
        label: 'Sieci komputerowe i multimedia',
        routerLink: ''
      },
      {
        label: 'Technologia CISCO',
        routerLink: ''
      }
    ];
  }

}
