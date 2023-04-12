import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefParentToTableComponent } from './ref-parent-to-table.component';

describe('RefParentToTableComponent', () => {
  let component: RefParentToTableComponent;
  let fixture: ComponentFixture<RefParentToTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefParentToTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefParentToTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
