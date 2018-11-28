import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesInfoComponent } from './samples-info.component';

describe('SamplesInfoComponent', () => {
  let component: SamplesInfoComponent;
  let fixture: ComponentFixture<SamplesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
