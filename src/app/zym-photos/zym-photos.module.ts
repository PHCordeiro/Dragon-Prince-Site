import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZymPhotosPageRoutingModule } from './zym-photos-routing.module';

import { ZymPhotosPage } from './zym-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZymPhotosPageRoutingModule
  ],
  declarations: [ZymPhotosPage]
})
export class ZymPhotosPageModule {}
