import addBid from "./bid-bot-services.js";

const add = (req, res) => {
	const { stautusCode, response } = addBid(req.body);
	res.status(stautusCode).json(response);
};

export default add;
