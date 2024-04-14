import { Fixture } from "./interfaces";

// this should be persisted in a database in a real-world application
let sessionStore: {
  randomFixtures: Fixture[];
  sessions: { [i: string]: UserSession };
} = {
  randomFixtures: [],
  sessions: {},
};

export interface UserSession {
  callerId: string | null;
  selectedFixture: Fixture | null;
}

export function getSession(callerId: string) {
  return sessionStore.sessions[callerId];
}

export function newSession(callerId: string) {
  sessionStore.sessions[callerId] = {
    callerId,
    selectedFixture: null,
  };

  return sessionStore.sessions[callerId];
}

export function getHighlightedFixturesFromState() {
  return sessionStore.randomFixtures;
}

export function updateHighlightedFixtures(fixtures: Fixture[]) {
  sessionStore.randomFixtures = [...fixtures];
  return sessionStore.randomFixtures;
}

export function updateSession(
  callerId: string,
  partialSession: Partial<UserSession>
) {
  const state = sessionStore.sessions[callerId];
  sessionStore.sessions[callerId] = { ...state, ...partialSession };
  return sessionStore.sessions[callerId];
}
