import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesInfoComponent } from './races-info.component';

describe('RacesInfoComponent', () => {
  let component: RacesInfoComponent;
  let fixture: ComponentFixture<RacesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
