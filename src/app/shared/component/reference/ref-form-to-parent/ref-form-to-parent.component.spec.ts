import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefFormToParentComponent } from './ref-form-to-parent.component';

describe('RefFormToParentComponent', () => {
  let component: RefFormToParentComponent;
  let fixture: ComponentFixture<RefFormToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefFormToParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefFormToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
