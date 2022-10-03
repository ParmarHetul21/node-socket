export const addBid = (data) => {
	console.log("New Bid Has come", data);

	// Calculation from here of the bid into database

	const response = {
		stautusCode: 200,
		response: data
	};
	return response;
};

export default addBid;
