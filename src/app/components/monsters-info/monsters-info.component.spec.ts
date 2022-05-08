import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersInfoComponent } from './monsters-info.component';

describe('MonstersInfoComponent', () => {
  let component: MonstersInfoComponent;
  let fixture: ComponentFixture<MonstersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
