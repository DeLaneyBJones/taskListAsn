import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistPage } from './tasklist.page';

describe('TasklistPage', () => {
  let component: TasklistPage;
  let fixture: ComponentFixture<TasklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
