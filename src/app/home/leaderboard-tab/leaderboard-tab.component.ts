import { Component, Input, OnInit } from '@angular/core';
import { AOELeaderboard } from 'src/app/model/aoe-leaderboard';
import { AOEProfile } from 'src/app/model/aoe-profile';

@Component({
  selector: 'app-leaderboard-tab',
  templateUrl: './leaderboard-tab.component.html',
  styleUrls: ['./leaderboard-tab.component.sass']
})
export class LeaderboardTabComponent implements OnInit {

  displayedColumns: string[] = ['rank', 'rating', 'name', 'games', 'wins', 'losses']
  @Input() leaderboardData: AOELeaderboard

  dataSource: AOEProfile[]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.leaderboardData.leaderboard
  }

}
