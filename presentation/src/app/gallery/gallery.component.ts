import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery;
  galleries;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.galleries = [
      {
        id: 'upc',
        items: [
          {
            photoUrl: 'assets/images/upc/1upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/2upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/3upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/4upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/5upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/6upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/7upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/8upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/9upc.jpg'
          },
          {
            photoUrl: 'assets/images/upc/10upc.jpg'
          }]
      },
      {
        id: 'klaster',
        items: [
          {
            photoUrl: 'assets/images/klaster/1klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/2klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/3klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/4klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/5klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/6klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/7klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/8klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/9klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/10klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/11klaster.jpg'
          },
          {
            photoUrl: 'assets/images/klaster/12klaster.jpg'
          }
        ]
      },
      {
        id: 'MIT',
        items: [
          {
            photoUrl: 'assets/images/MIT/M05_01.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M05_02.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M05_03.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M05_04.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M05_05.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_01.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_02.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_03.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_04.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_05.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_06.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_07.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_08.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_09.jpg'
          },
          {
            photoUrl: 'assets/images/MIT/M07_10.jpg'
          }
        ]
      },
      {
        id: 'Tapio',
        items: [
          {
            photoUrl: 'assets/images/Wizyta Tapio/01.jpg'
          },
          {
            photoUrl: 'assets/images/Wizyta Tapio/02.jpg'
          },
          {
            photoUrl: 'assets/images/Wizyta Tapio/03.jpg'
          },
          {
            photoUrl: 'assets/images/Wizyta Tapio/04.jpg'
          },
          {
            photoUrl: 'assets/images/Wizyta Tapio/05.jpg'
          }
        ]
      }
    ];

    this.route.params.subscribe(routeParams => {
      this.gallery = this.galleries.find(gal => gal.id === routeParams.id);
      console.log(JSON.stringify(this.gallery.items));
    });
  }

}
