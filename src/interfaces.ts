export interface RandomFixtures {
  fixtures: Fixture[];
}

export interface Entity {
  id: string;
  name: string;
  displayName: string;
}

export interface Fixture extends Entity {
  date: string;
  participants: Participant[];
  markets: Market[];
  league: League;
  sport: Sport;
  location: string;
}

export interface Participant extends Entity {}

export interface Market extends Entity {
  lSportsId: number | null;
  bets: Bet[];
}

export interface Bet extends Entity {
  lSportsName: string;
  odds: number;
  selected: boolean;
  line?: string;
  player?: Player;
}

export interface Player extends Entity {
  lSportsId: number | null;
  lVisionId: string | null;
}

export interface League extends Entity {}

export interface Sport extends Entity {}
