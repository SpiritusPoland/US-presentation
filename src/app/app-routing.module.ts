import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {MainPageComponent} from './main-page/main-page.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GalleriesComponent} from './galleries/galleries.component';


const routes: Routes = [  {
  path: 'employees/:id',
  component: EmployeesComponent,
},
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'gallery',
    component: GalleriesComponent
  },
  {
    path: 'gallery/:id',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
