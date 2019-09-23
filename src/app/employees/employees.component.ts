import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employee: Employee;
  employees: Employee[] = [
    {
      id: 'dr-hab-Piotr-Porwik',
      name: 'dr hab. Piotr Porwik',
      position: 'Kierownik Zagładu',
      phone: '+48 32 3689762',
      room: '307',
      email: 'piotr.porwik@us.edu.pl',
      consultations: '',
      department: 'Zakład Systemów Komputerowych',
      seniority: 42,
      imgPath: 'assets/images/PP.jpg'
    },
    {
      id: 'dr-inz-Rafal-Doroz',
      name: 'dr inż. Rafał Doroz',
      position: 'Adiunkt',
      phone: '+48 32 3689714',
      room: '304',
      email: 'rafal.doroz@us.edu.pl',
      consultations: '',
      department: 'Zakład Systemów Komputerowych',
      seniority: 20,
      imgPath: 'assets/images/RD2.jpg'
    },
    {
      id: 'dr-inz-Przemyslaw-Kudlacik',
      name: 'dr inż. Przemysław Kudłacik',
      position: 'Adiunkt',
      phone: '+48 32 368 9796',
      room: '323',
      email: 'przemyslaw.kudlacik@us.edu.pl',
      consultations: 'wtorek 10:00-11:00, środa 12:00-13:00\n',
      department: 'Zakład Systemów Komputerowych',
      seniority: 10,
      imgPath: 'assets/images/PK.jpg'
    },
    {
      id: 'dr-hab-inz-Bartlomiej-Placzek',
      name: 'dr hab. inż. Bartłomiej Płaczek',
      position: 'Adiunkt',
      phone: '',
      room: '311',
      email: 'bartlomiej.placzek@us.edu.pl',
      consultations: '',
      department: 'Zakład Systemów Komputerowych',
      seniority: 5,
      imgPath: 'assets/images/BP.jpg'
    },
    {
      id: 'dr-Krzysztof-Wrobel',
      name: 'dr Krzysztof Wróbel',
      position: 'Starszy Wykładowca',
      phone: '+48 32 3689766',
      room: '320B',
      email: 'krzysztof.wrobel@us.edu.pl',
      consultations: '',
      department: 'Zakład Systemów Komputerowych',
      seniority: 20,
      imgPath: ''
    },
    {
      id: 'dr-inz-Jaroslaw-Zygula',
      name: 'dr inż. Jarosław Zyguła',
      position: 'Starszy Wykładowca',
      phone: '+48 32 3689793',
      room: '310',
      email: 'jaroslaw.zygula@us.edu.pl',
      consultations: 'pn. 12:00-12:45 wt. 10:00-10:45\n',
      department: 'Zakład Systemów Komputerowych',
      seniority: 31,
      imgPath: ''
    },
    {
      id: 'dr-inz-Tomasz-Orczyk',
      name: 'dr inż. Tomasz Orczyk',
      position: 'Adiunkt',
      phone: '',
      room: '312',
      email: 'tomasz.orczyk@us.edu.pl',
      consultations: 'W ciągu semestru:' +
        'w/g planu zajęć' +
        'Poza semestrem i w dniach wolnych od zajęć:',
      department: 'Zakład Systemów Komputerowych',
      seniority: 9,
      imgPath: ''
    },
    {
      id: 'mgr-inz-Tomasz-Wesolowski',
      name: 'mgr inż. Tomasz Wesołowski',
      position: 'Wykładowca',
      phone: '+48 32 368 97 96',
      room: '323',
      email: 'tomasz.wesolowski@us.edu.pl',
      consultations: 'wg. harmonogramu na plan.ii.us.edu.pl\n',
      department: 'Zakład Systemów Komputerowych',
      seniority: 10,
      imgPath: ''
    },
    {
      id: 'mgr-Marcin-Cholewa',
      name: 'mgr Marcin Cholewa',
      position: 'Asystent',
      phone: '',
      room: '312',
      email: 'marcin.cholewa@us.edu.pl',
      consultations: 'Pn: 9:15 - 10:00, Śr: 11:15 - 12:00',
      department: 'Zakład Systemów Komputerowych',
      seniority: 4,
      imgPath: ''
    },
    {
      id: 'mgr-Marcin-Lewandowski',
      name: 'mgr Marcin Lewandowski',
      position: 'Asystent',
      phone: '323689717',
      room: '312',
      email: 'marcin.lewandowski@us.edu.pl',
      consultations: 'Pn: 9:00 - 9:45, Wt: 11:15 - 12:00\n',
      department: 'Zakład Systemów Komputerowych',
      seniority: 4,
      imgPath: ''
    },
    {
      id: 'mgr-Hossein-Safaverdi',
      name: 'mgr Hossein Safaverdi',
      position: 'Asystent',
      phone: '323689714',
      room: '304',
      email: 'hossein.safaverdi@us.edu.pl',
      consultations: '',
      department: 'Zakład Systemów Komputerowych',
      seniority: 4,
      imgPath: ''
    },

  ];

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {

    this.route.params.subscribe(routeParams => {
      let empl = this.employees.find(emp => emp.id === routeParams.id);
      empl.seniority += (new Date()).getFullYear() - 2019;
      console.log((new Date()).getFullYear());
      this.employee = empl;
    });
    console.log(JSON.stringify(this.employee));
  }

}


