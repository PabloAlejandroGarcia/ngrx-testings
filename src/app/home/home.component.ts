import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, skipUntil, skipWhile, tap } from 'rxjs';
import { AOELeaderboard } from '../model/aoe-leaderboard';
import { AOEObject } from '../model/aoe-object';
import { AOEProfile } from '../model/aoe-profile';
import { loadLeaderboard, loadStrings, setStrings } from '../store/actions';
import { AOEState } from '../store/reducers';
import { currentLeaderboard, leaderboardStrings } from '../store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  leaderboards$: Observable<AOEObject[]> = this.store.select(leaderboardStrings)
  currentLeaderboard$ : Observable<AOELeaderboard> = this.store.select(currentLeaderboard)
  displayedColumns: string[] = ['rank', 'rating', 'name', 'games', 'wins', 'losses']
  dataSource$: Observable<AOEProfile[]> = this.currentLeaderboard$.pipe(
    skipWhile(currentLeaderboard => currentLeaderboard === undefined),
    map(leaderboard => (leaderboard.leaderboard))
  )
  matchesOptions: number[] = [10,25,50,100]
  count: number = 10

  constructor(
    private store: Store<AOEState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadStrings())
    this.store.dispatch(loadLeaderboard({index: 3, count: this.count}))
  }

}
