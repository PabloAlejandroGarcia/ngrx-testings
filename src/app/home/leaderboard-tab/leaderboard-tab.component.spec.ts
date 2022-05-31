import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTabComponent } from './leaderboard-tab.component';

describe('LeaderboardTabComponent', () => {
  let component: LeaderboardTabComponent;
  let fixture: ComponentFixture<LeaderboardTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
