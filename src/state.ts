// this should be persisted in a database in a real-world application
let state: State = {
  sessionId: null,
  randomFixtures: [],
  selectedFixture: null,
};

export interface State {
  sessionId: string | null;
  randomFixtures: any[];
  selectedFixture: any | null;
}

export function getState() {
  return state;
}

export function updateState(newState: Partial<State>) {
  state = { ...state, ...newState };
}
