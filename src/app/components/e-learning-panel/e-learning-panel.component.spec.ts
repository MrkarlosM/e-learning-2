import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningPanelComponent } from './e-learning-panel.component';

describe('ELearningPanelComponent', () => {
  let component: ELearningPanelComponent;
  let fixture: ComponentFixture<ELearningPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELearningPanelComponent]
    });
    fixture = TestBed.createComponent(ELearningPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
