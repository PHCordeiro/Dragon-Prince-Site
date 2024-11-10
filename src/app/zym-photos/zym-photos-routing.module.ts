import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZymPhotosPage } from './zym-photos.page';

const routes: Routes = [
  {
    path: '',
    component: ZymPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZymPhotosPageRoutingModule {}
