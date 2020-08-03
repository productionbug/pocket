module.exports = (err, req, res, next) => {
	console.log(err);

	if (err.message === "Title and Amount is required!") {
		res.status(400).send({ error: err.message });
	}
	res.status(500).send({ error: "Internal Server Error" });
};
