import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawOnImageComponent } from './draw-on-image.component';

describe('DrawOnImageComponent', () => {
  let component: DrawOnImageComponent;
  let fixture: ComponentFixture<DrawOnImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawOnImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawOnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
