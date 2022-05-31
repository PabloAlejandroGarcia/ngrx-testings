import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { LeaderboardTabComponent } from './home/leaderboard-tab/leaderboard-tab.component';
import { StoreModule } from '@ngrx/store';
import { AOELeaderboardsReducer, LEADERBOARDS_FEATURE_STORE_KEY } from './store/reducers/leaderboards.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeaderboardEffects } from './store/effects/leaderboards.effects';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    LeaderboardTabComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LeaderboardEffects]),
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature(LEADERBOARDS_FEATURE_STORE_KEY, AOELeaderboardsReducer)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
