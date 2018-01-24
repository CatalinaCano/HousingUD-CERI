import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostularAlojamientoComponent } from './postular-alojamiento.component';

describe('PostularAlojamientoComponent', () => {
  let component: PostularAlojamientoComponent;
  let fixture: ComponentFixture<PostularAlojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostularAlojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostularAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
