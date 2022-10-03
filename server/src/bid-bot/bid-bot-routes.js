import { Router } from "express";
import add from "./bid-bot-handlers.js";

const bidBotRouter = Router();

bidBotRouter.post("/bid", add);

export default bidBotRouter;
