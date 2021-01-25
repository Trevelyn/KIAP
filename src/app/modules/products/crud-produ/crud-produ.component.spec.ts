import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProduComponent } from './crud-produ.component';

describe('CrudProduComponent', () => {
  let component: CrudProduComponent;
  let fixture: ComponentFixture<CrudProduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
