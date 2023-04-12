import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildFormToParentComponent } from './view-child-form-to-parent.component';

describe('ViewChildFormToParentComponent', () => {
  let component: ViewChildFormToParentComponent;
  let fixture: ComponentFixture<ViewChildFormToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildFormToParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildFormToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
