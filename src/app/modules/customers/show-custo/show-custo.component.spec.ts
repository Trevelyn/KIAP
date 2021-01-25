import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustoComponent } from './show-custo.component';

describe('ShowCustoComponent', () => {
  let component: ShowCustoComponent;
  let fixture: ComponentFixture<ShowCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
