import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErzanPhotosPage } from './erzan-photos.page';

const routes: Routes = [
  {
    path: '',
    component: ErzanPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErzanPhotosPageRoutingModule {}
