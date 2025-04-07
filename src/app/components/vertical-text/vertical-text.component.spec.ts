import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTextComponent } from './vertical-text.component';

describe('VerticalTextComponent', () => {
  let component: VerticalTextComponent;
  let fixture: ComponentFixture<VerticalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
