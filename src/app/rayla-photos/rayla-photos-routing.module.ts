import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaylaPhotosPage } from './rayla-photos.page';

const routes: Routes = [
  {
    path: '',
    component: RaylaPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaylaPhotosPageRoutingModule {}
