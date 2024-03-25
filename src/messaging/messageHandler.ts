import client, { Twilio } from "twilio";
import { MessageListInstanceCreateOptions } from "twilio/lib/rest/api/v2010/account/message";
import { RandomFixtures } from "../interfaces";

let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let secApiToken = process.env.SEC_API_TOKEN;
let messagesClient: Twilio | null = null;

export function init() {
  accountSid = process.env.TWILIO_ACCOUNT_SID;
  authToken = process.env.TWILIO_AUTH_TOKEN;
  secApiToken = process.env.SEC_API_TOKEN;

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

export async function getRandomFixtures(): Promise<RandomFixtures> {
  const response = await fetch(
    "https://sec-gw.lsports.eu/fixtures/api/v1/fixtures",
    {
      headers: { authorization: `Bearer ${secApiToken}` },
    }
  );

  return response.json() as Promise<RandomFixtures>;
}

// (async () => {
//   // get random fixture
//   try {
//     randomFixture = await getRandomFixtures();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }

//   const fixturesMsg = randomFixture.fixtures.map(
//     (fixture, i) =>
//       `${i + 1}. ${fixture.participants[0].name} vs ${
//         fixture.participants[1].name
//       },at ${new Date(fixture.date).toString()}`
//   );

//   const fullFixtureSelectionMsg =
//     `Please select the fixture you want to bet on by replying with the number of the fixture\n` +
//     fixturesMsg.join("\n");

//   const msgResponse = await client.messages.create({
//     body: fullFixtureSelectionMsg,
//     from: "whatsapp:+14155238886",
//     to: "whatsapp:+972535330826",
//   });
//   console.log(msgResponse);

//   sessionId = msgResponse.sid;
// })();
