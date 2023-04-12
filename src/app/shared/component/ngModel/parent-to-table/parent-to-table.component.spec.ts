import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToTableComponent } from './parent-to-table.component';

describe('ParentToTableComponent', () => {
  let component: ParentToTableComponent;
  let fixture: ComponentFixture<ParentToTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentToTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentToTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
