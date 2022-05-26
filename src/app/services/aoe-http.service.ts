import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { AOEStrings } from '../model/aoe-strings';
import { AOELeaderboard } from '../model/aoe-leaderboard';

@Injectable({
  providedIn: 'root'
})
export class AoeHTTPService {

  constructor(private http: HttpClient) { }

  getInitialData(): Observable<AOEStrings> {
    return this.http.get<AOEStrings>(`${environment.aoeAPIURL}/strings`, {
      params: new HttpParams()
        .set('game', 'aoe2de')
        .set('language', 'en')
    })
  }

  getLeaderboard(leaderboardId: number, count: number): Observable<AOELeaderboard> {
    return this.http.get<AOELeaderboard>(`${environment.aoeAPIURL}/leaderboard`, {
      params: new HttpParams()
        .set('game', 'aoe2de')
        .set('start', '1')
        .set('leaderboard_id', leaderboardId)
        .set('count', count)
    })
  }
}
