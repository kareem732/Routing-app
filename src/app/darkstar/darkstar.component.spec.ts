import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkstarComponent } from './darkstar.component';

describe('DarkstarComponent', () => {
  let component: DarkstarComponent;
  let fixture: ComponentFixture<DarkstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkstarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
