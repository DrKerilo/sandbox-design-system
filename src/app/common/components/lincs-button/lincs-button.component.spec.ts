import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LincsButtonComponent } from './lincs-button.component';

describe('LincsButtonComponent', () => {
  let component: LincsButtonComponent;
  let fixture: ComponentFixture<LincsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LincsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LincsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
