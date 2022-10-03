import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import "dotenv/config";
import v1Router from "./src/server.js";

const app = express();

// ENV constant
const PORT = process.env.PORT;

// Configurations
app.use(cors());
app.use(bodyparser.json());
app.use("/v1", v1Router);

// Internal Server Error Middleware
app.use((error, req, res, next) => {
	res.status(500).json({
		error
	});
});

export default app;
