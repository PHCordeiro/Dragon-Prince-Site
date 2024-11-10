import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErzanPhotosPage } from './erzan-photos.page';

describe('ErzanPhotosPage', () => {
  let component: ErzanPhotosPage;
  let fixture: ComponentFixture<ErzanPhotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErzanPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
