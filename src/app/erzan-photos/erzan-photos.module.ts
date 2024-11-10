import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErzanPhotosPageRoutingModule } from './erzan-photos-routing.module';

import { ErzanPhotosPage } from './erzan-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErzanPhotosPageRoutingModule
  ],
  declarations: [ErzanPhotosPage]
})
export class ErzanPhotosPageModule {}
