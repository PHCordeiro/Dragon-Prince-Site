import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallumPhotosPage } from './callum-photos.page';

describe('CallumPhotosPage', () => {
  let component: CallumPhotosPage;
  let fixture: ComponentFixture<CallumPhotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CallumPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
