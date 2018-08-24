import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoVideosComponent } from './gestao-videos.component';

describe('GestaoVideosComponent', () => {
  let component: GestaoVideosComponent;
  let fixture: ComponentFixture<GestaoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
