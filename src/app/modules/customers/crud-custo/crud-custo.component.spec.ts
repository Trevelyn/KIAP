import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCustoComponent } from './crud-custo.component';

describe('CrudCustoComponent', () => {
  let component: CrudCustoComponent;
  let fixture: ComponentFixture<CrudCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
