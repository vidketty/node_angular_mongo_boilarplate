import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './animal/add-animal/add-animal.component';
import { AnimalsComponent } from './animal/animals/animals.component';
import { AdoptedAnimalsComponent } from './animal/adopted-animals/adopted-animals.component';
import { EditAnimalComponent } from './animal/edit-animal/edit-animal.component';

const routes: Routes = [
  {
    path: 'animal/edit/:id',
    component: EditAnimalComponent
  },

  {
    path: 'animal/shalter',
    component: AnimalsComponent
  },

  {
    path: 'animal/adopted',
    component: AdoptedAnimalsComponent
  },

  {
    path: 'animal/create',
    component: AddAnimalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
