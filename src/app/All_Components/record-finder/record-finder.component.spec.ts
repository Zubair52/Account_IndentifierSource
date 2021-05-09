import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFinderComponent } from './record-finder.component';

describe('RecordFinderComponent', () => {
  let component: RecordFinderComponent;
  let fixture: ComponentFixture<RecordFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
