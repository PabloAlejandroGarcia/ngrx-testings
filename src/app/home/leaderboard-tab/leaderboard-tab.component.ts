import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-tab',
  templateUrl: './leaderboard-tab.component.html',
  styleUrls: ['./leaderboard-tab.component.sass']
})
export class LeaderboardTabComponent implements OnInit {

  displayedColumns: string[] = ['rank', 'rating', 'name', 'games', 'wins', 'losses']
  @Input() leaderboardData: string
  /*currentLeaderboard$ : Observable<AOELeaderboard> = this.store.select(currentLeaderboard)
  dataSource$: Observable<AOEProfile[]> = this.currentLeaderboard$.pipe(
    skipWhile(currentLeaderboard => currentLeaderboard === undefined),
    skipWhile(currentLeaderboard => currentLeaderboard.leaderboard === undefined),
    map(leaderboard => (leaderboard.leaderboard))
  )*/

  constructor() { }

  ngOnInit(): void {}

}
