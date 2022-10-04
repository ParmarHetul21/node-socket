import v1Socket from "./../../index.js";

const newBidRecieved = (args) => {
	let timeInterval;
	let sum = 1;
	sum += args;

	if (sum === 10) {
		v1Socket.emit("bid:count", sum);
	}
};

export default newBidRecieved;
