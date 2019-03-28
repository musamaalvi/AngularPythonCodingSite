import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonManiaComponent } from './python-mania.component';

describe('PythonManiaComponent', () => {
  let component: PythonManiaComponent;
  let fixture: ComponentFixture<PythonManiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonManiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonManiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
