import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsResultsComponent } from './records-results.component';

describe('RecordsResultsComponent', () => {
  let component: RecordsResultsComponent;
  let fixture: ComponentFixture<RecordsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
