import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZymPhotosPage } from './zym-photos.page';

describe('ZymPhotosPage', () => {
  let component: ZymPhotosPage;
  let fixture: ComponentFixture<ZymPhotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZymPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
