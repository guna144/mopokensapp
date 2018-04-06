import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MopokensComponent } from './mopokens.component';

describe('MopokensComponent', () => {
  let component: MopokensComponent;
  let fixture: ComponentFixture<MopokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MopokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MopokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
