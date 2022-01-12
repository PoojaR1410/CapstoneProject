import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgadminComponent } from './imgadmin.component';

describe('ImgadminComponent', () => {
  let component: ImgadminComponent;
  let fixture: ComponentFixture<ImgadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
