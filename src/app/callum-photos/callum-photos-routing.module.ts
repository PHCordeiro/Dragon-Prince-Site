import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallumPhotosPage } from './callum-photos.page';

const routes: Routes = [
  {
    path: '',
    component: CallumPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallumPhotosPageRoutingModule {}
