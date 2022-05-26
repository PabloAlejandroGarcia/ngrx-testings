import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AOEStrings } from '../model/aoe-strings';
import { AoeHTTPService } from '../services/aoe-http.service';
import { loadStrings, setStrings } from '../store/actions';
import { AOEState } from '../store/reducers';
import { baseStrings } from '../store/selectors';

// TODO: Remove this test data
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// TODO: Remove this test data
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  strings$: Observable<AOEStrings> = this.store.select(baseStrings)
  // TODO: Remove this test data
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  dataSource = ELEMENT_DATA

  constructor(
    private store: Store<AOEState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadStrings())
  }

}
