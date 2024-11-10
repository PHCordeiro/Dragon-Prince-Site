import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaylaPhotosPageRoutingModule } from './rayla-photos-routing.module';

import { RaylaPhotosPage } from './rayla-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaylaPhotosPageRoutingModule
  ],
  declarations: [RaylaPhotosPage]
})
export class RaylaPhotosPageModule {}
