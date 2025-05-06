import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingStreamsContainerComponent } from './upcoming-streams-container.component';

describe('UpcomingStreamsContainerComponent', () => {
  let component: UpcomingStreamsContainerComponent;
  let fixture: ComponentFixture<UpcomingStreamsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingStreamsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingStreamsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
