import { Router } from "express";
import bidBotRouter from "./bid-bot/bid-bot-routes.js";

const v1Router = Router();

v1Router.use("/bidBot", bidBotRouter);

// export const startSockets = (socket) => {
// 	socket.on("bid:create", newBidRecieved);
// };

export default v1Router;
