import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallumPhotosPageRoutingModule } from './callum-photos-routing.module';

import { CallumPhotosPage } from './callum-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallumPhotosPageRoutingModule
  ],
  declarations: [CallumPhotosPage]
})
export class CallumPhotosPageModule {}
