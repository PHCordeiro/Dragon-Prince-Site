import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaylaPhotosPage } from './rayla-photos.page';

describe('RaylaPhotosPage', () => {
  let component: RaylaPhotosPage;
  let fixture: ComponentFixture<RaylaPhotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RaylaPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
