import { useEffect, useState } from "react";
import { Manager } from "socket.io-client";

const manager = new Manager("http://localhost:3800").socket("/v1");

const BidBot = () => {
	const [connected, setconnection] = useState(false);
	const [increment, setIncrement] = useState(1);
	const [total, setTotal] = useState(0);
	const [count, setCountDown] = useState(0);

	const addBid = () => {
		setIncrement(increment + 1);
		manager.emit("bid:increment", increment);
	};
	const interval = setInterval(() => {
		console.log("hello");
		setCountDown(count + 1);
	}, 1000);

	useEffect(() => {}, [count]);

	// useEffect(() => {
	// 	manager.on("connect", () => {
	// 		setconnection(true);
	// 	});

	// 	manager.on("bid:count", (count) => {
	// 		setTotal(count);
	// 	});

	// 	return () =>
	// 		manager.on("disconnect", () => {
	// 			setconnection(false);
	// 		});
	// }, []);

	return (
		<>
			<div>
				{connected ? <div>Online</div> : <div>Offline</div>}
				<h1>{increment}</h1>
				<button onClick={addBid}>Add Bid</button>
			</div>

			<div>
				<h1>{total}</h1>
			</div>

			<div>count is : {count}</div>
		</>
	);
};

export default BidBot;
