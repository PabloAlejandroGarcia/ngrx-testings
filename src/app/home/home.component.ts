import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { AOELeaderboard } from '../model/aoe-leaderboard';
import { AOEObject } from '../model/aoe-object';
import { loadStrings } from '../store/actions';
import { LeaderboardsActions } from '../store/actions/action-types';
import { AOEState } from '../store/reducers';
import { leaderboardStrings } from '../store/selectors';
import { selectLeaderboards } from '../store/selectors/leaderboards.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  leaderboards$: Observable<AOEObject[]> = this.store.select(leaderboardStrings).pipe(
    filter(leaderboards => (leaderboards !== undefined)),
    tap(leaderboards => {
      leaderboards.forEach((leaderboard) => this.store.dispatch(
        LeaderboardsActions.loadLeaderboard({index: leaderboard.id, count: this.count})
      ))
    })
  )

  matchesOptions: number[] = [10,25,50,100]
  count: number = 10

  constructor(
    private store: Store<AOEState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadStrings())
  }

  getLeaderboardData$(id: number): Observable<AOELeaderboard> {
    return this.store.select(selectLeaderboards).pipe(
      switchMap((leaderboards) => leaderboards.filter(leaderboard => leaderboard.leaderboard_id === id))
    )
  }

}
