import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChildToParentComponent } from './ng-child-to-parent.component';

describe('NgChildToParentComponent', () => {
  let component: NgChildToParentComponent;
  let fixture: ComponentFixture<NgChildToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgChildToParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
