import app from "./app.js";
import "dotenv/config";
// import { startSockets } from "./src/server.js";
import { Server } from "socket.io";

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
	console.log(`server started at http://localhost:${PORT}`);
});

const io = new Server(server, {
	cors: { origin: "*" }
});

const v1Socket = io.of("/v1").on("connection", (socket) => {
	console.log("User Connect on V1 Socket", socket.id);
});
