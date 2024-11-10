import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/tab0',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'tab4',
    loadChildren: () =>
      import('./tab4/tab4.module').then((m) => m.Tab4PageModule),
  },
  {
    path: 'zym-photos',
    loadChildren: () =>
      import('./zym-photos/zym-photos.module').then(
        (m) => m.ZymPhotosPageModule
      ),
  },
  {
    path: 'erzan-photos',
    loadChildren: () =>
      import('./erzan-photos/erzan-photos.module').then(
        (m) => m.ErzanPhotosPageModule
      ),
  },
  {
    path: 'callum-photos',
    loadChildren: () =>
      import('./callum-photos/callum-photos.module').then(
        (m) => m.CallumPhotosPageModule
      ),
  },
  {
    path: 'rayla-photos',
    loadChildren: () =>
      import('./rayla-photos/rayla-photos.module').then(
        (m) => m.RaylaPhotosPageModule
      ),
  },
  {
    path: 'tab0',
    loadChildren: () =>
      import('./tab0/tab0.module').then((m) => m.Tab0PageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
