import client, { Twilio } from "twilio";
import { MessageListInstanceCreateOptions } from "twilio/lib/rest/api/v2010/account/message";
import { Fixture } from "../interfaces";

import {
  getHighlightedFixturesFromState,
  getSession,
  newSession,
  updateHighlightedFixtures,
  updateSession,
} from "../state";

import {
  getHighlightedFixtures,
  sendChatMessage,
} from "../sports-expert-chat/secHandler";

let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let messagesClient: Twilio | null = null;

export function init() {
  accountSid = process.env.TWILIO_ACCOUNT_SID;
  authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken)
    throw new Error("Twilio credentials not provided");

  if (messagesClient) return;

  messagesClient = client(accountSid, authToken);
}

export async function sendMessage(msg: MessageListInstanceCreateOptions) {
  if (!messagesClient) throw new Error("Twilio client not initialized");
  return await messagesClient.messages.create({
    from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
    ...msg,
  });
}

export function buildRandomFixturesMsg(fixtures: Fixture[]) {
  const fixturesMsg = fixtures.map(
    (fixture, i) =>
      `${i + 1}. ${fixture.participants[0].name} vs ${
        fixture.participants[1].name
      },at ${new Date(fixture.date).toString()}`
  );

  return (
    `Please select the fixture you want to bet on by replying with the number of the fixture\n` +
    fixturesMsg.join("\n")
  );
}

export async function handleMessage(msg: string, from: string) {
  let response =
    "Please select a fixture by replying with the number of the fixture, or press `#` to restart the session";
  let currentSession = getSession(from);
  let fixtures = getHighlightedFixturesFromState();

  // if there are no fixtures, get some from the API
  if (!fixtures.length) {
    const randomFixtures = await getHighlightedFixtures();
    fixtures = updateHighlightedFixtures(randomFixtures.fixtures);
  }

  // if the user is new, create a new session for them and send them the fixtures
  if (!currentSession || msg === "#") {
    currentSession = newSession(from);
    return buildRandomFixturesMsg(fixtures);
  }

  // we already have a selected fixture, lets talk with the LLM
  if (currentSession?.selectedFixture) {
    const chatResponse = await sendChatMessage(
      msg,
      currentSession.selectedFixture
    );

    return `${chatResponse.message.text}`;
  }

  // if the user has not selected a fixture, parse the message and select the fixture
  if (parseInt(msg) > 0 && parseInt(msg) <= fixtures.length) {
    const selectedFixture = fixtures[parseInt(msg)];
    currentSession = updateSession(from, { selectedFixture });
    response = `You have selected ${selectedFixture.participants[0].name} vs ${selectedFixture.participants[1].name}, at ${new Date(selectedFixture.date).toString()}.\nAsk me any question about the fixture, for example "Which team will win?" or "How many goals will be scored?"\nYou can always return to the fixture selection list by pressing "#"`;
  } else {
    return `Invalid selection. Please select a fixture by replying with the number of the fixture, or press "#" to restart the session`;
  }

  if (!currentSession.selectedFixture) {
    return buildRandomFixturesMsg(fixtures);
  }

  return response;
}
