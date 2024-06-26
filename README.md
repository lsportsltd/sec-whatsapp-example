[![LSports](https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiYXdlc29tZS10bHZcL2ZpbGVcL0p3S3dweU5Ub2pDQld3d3l5YTdkLnBuZyJ9:awesome-tlv:s5wJjkZJhYz_mhMs6SmsJeoRZWoxuvrOPGrNMUQP1tU?width=2400)](https://www.lsports.eu)
# Sports Expert Chat
## _WhatsApp Demo_

LSports is introducing a revolutionary AI-based large language model to the world of sports betting with SEC (Sports Expert Chat). Powered by technology similar to ChatGPT, SEC is a cutting-edge interactive chatbot and sports data hub designed to operate as a personal sports advisor for bettors. It's specifically crafted to assist sportsbooks in addressing the challenge of attracting new customers and increasing retention rates.

SEC provides actionable insights and guidance to bettors by offering data-driven tips, essential event details, live updates, weather forecasts, and comprehensive statistics. This empowers end-users to make informed decisions and enhances their loyalty to the platform, eventually leading to higher turnover rates for bookies.

[![LSports SEC](https://github.com/lsportsltd/sec-whatsapp-example/blob/main/assets/example.png)](https://www.lsports.eu/sec/)

## Features

- ChatGPT like (LLM), most knowledgeable sports commentator based on AI.
- Prematch & Inplay generated AI based tips.
- Events hub, featuring formations, weather, lineups, news and more.
- Over 120+ languages
- 10 major supported sports

## Tech

This demo uses a number of open source projects to work properly:

- [Fastify] - HTML enhanced for web apps!
- [node.js] - evented I/O for the backend
- [ngrok] - local network tunneling

And [Twilio](https://twilio.com) as the communication platform that integrates with WhatsApp.

## Prerequisites

To use this demo, you need to create a sandbox account on Twilio. Follow these steps:

1. Go to the [Twilio website](https://www.twilio.com/) and sign up for an account if you don't have one already.
2. Once you're logged in, navigate to the [Twilio Console](https://www.twilio.com/console).
3. In the left sidebar, click on "Messaging" and then select "Try it out" and then "Send a WhatsApp message".
4. Follow the steps, create a sandbox number and verify.
5. Go to "Sandbox settings", and in the "When a message comes in" field put the ngrok tunnel url, and for the "Method" use "POST".

You will also need a working Sports Expert Chat account, which you can get from our sales team here at LSports, contact them via sales@lsports.eu and ask for one.

## Installation

This demo requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

```bash
clone https://github.com/lsportsltd/sec-whatsapp-example
cd sec-whatsapp-example
npm i
```

## Development

Want to contribute? Great!

This demo uses nodemon + typescript compiler (tsc) for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```bash
npm run dev
```

Second Tab:

```bash
npm run watch
```

Third Tab:

```bash
ngrok localhost 3006
```

Create a `.env` file in the root of the project, use the same keys you have in `.env.example` and put in them the values from Twilio and LSports SEC.
Enjoy!

**Reach out to LSports today to start using SEC on your product today at sales@lsports.eu**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Fastify]: <https://github.com/fastify/fastify>
   [node.js]: <http://nodejs.org>
   [Twilio]: <https://twilio.com>
   [ngrok]: <https://ngrok.com>