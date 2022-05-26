import { AOEProfile } from "./aoe-profile";

export interface AOELeaderboard {
  total: number,
  leaderboard_id: number,
  start: number,
  count: number,
  leaderboard: AOEProfile[]
}
