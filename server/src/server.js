import { Router } from "express";
import newBidRecieved from "./bid-bot/bid-bot-publishers.js";
import bidBotRouter from "./bid-bot/bid-bot-routes.js";

const v1Router = Router();

v1Router.use("/bidBot", bidBotRouter);

export const startSockets = (socket) => {
	socket.on("bid:increment", newBidRecieved);
};

export default v1Router;
