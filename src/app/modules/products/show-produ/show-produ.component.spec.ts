import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProduComponent } from './show-produ.component';

describe('ShowProduComponent', () => {
  let component: ShowProduComponent;
  let fixture: ComponentFixture<ShowProduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
