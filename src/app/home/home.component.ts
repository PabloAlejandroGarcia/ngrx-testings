import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AOEStrings } from '../model/aoe-strings';
import { AoeHTTPService } from '../services/aoe-http.service';
import { setStrings } from '../store/actions';
import { AOEState } from '../store/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  strings$: Observable<AOEStrings>

  constructor(
    private aoeHTTPService: AoeHTTPService,
    private store: Store<AOEState>
  ) { }

  ngOnInit(): void {
    this.strings$ = this.aoeHTTPService.getInitialData().pipe(
      tap(strings => {
        this.store.dispatch(setStrings({strings}))
      })
    )
  }

}
