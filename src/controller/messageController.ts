import { FastifyInstance } from "fastify";
import { handleMessage, sendMessage } from "../messaging/messageHandler";

export default async function messageController(fastify: FastifyInstance) {
  // POST /api/v1/message
  fastify.post("/", async (req) => {
    try {
      const { Body, From, To } = req.body as {
        Body: string;
        From: string;
        To: string;
      };

      const response = await handleMessage(Body, From);
      sendMessage({ body: response, to: From, from: To });
    } catch (error) {
      console.error(error);
    }
  });
}
