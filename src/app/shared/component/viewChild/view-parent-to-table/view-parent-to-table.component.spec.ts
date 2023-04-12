import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParentToTableComponent } from './view-parent-to-table.component';

describe('ViewParentToTableComponent', () => {
  let component: ViewParentToTableComponent;
  let fixture: ComponentFixture<ViewParentToTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParentToTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewParentToTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
