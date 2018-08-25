import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoOwnerOnlyComponent } from './photo-owner-only.component';

describe('PhotoOwnerOnlyComponent', () => {
  let component: PhotoOwnerOnlyComponent;
  let fixture: ComponentFixture<PhotoOwnerOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoOwnerOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoOwnerOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
