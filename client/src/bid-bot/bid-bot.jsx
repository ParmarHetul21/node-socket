import { useEffect, useState } from "react";
import { Manager } from "socket.io-client";

const manager = new Manager("http://localhost:3800").socket("/v1");

const BidBot = () => {
	const [connected, setconnection] = useState(false);

	const addBid = () => {};

	useEffect(() => {
		manager.on("connect", () => {
			setconnection(true);
		});
	}, []);

	return (
		<>
			<button onClick={addBid}>Add Bid</button>
		</>
	);
};

export default BidBot;
