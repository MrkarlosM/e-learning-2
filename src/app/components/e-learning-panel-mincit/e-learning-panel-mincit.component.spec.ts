import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningPanelMincitComponent } from './e-learning-panel-mincit.component';

describe('ELearningPanelMincitComponent', () => {
  let component: ELearningPanelMincitComponent;
  let fixture: ComponentFixture<ELearningPanelMincitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELearningPanelMincitComponent]
    });
    fixture = TestBed.createComponent(ELearningPanelMincitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
