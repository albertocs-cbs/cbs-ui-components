import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbsUiComponentsComponent } from './cbs-ui-components.component';

describe('CbsUiComponentsComponent', () => {
  let component: CbsUiComponentsComponent;
  let fixture: ComponentFixture<CbsUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbsUiComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbsUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
