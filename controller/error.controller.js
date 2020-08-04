module.exports = (err, req, res, next) => {
	// console.log(err);

	if (err.message === "Title and Amount is required!") {
		return res.status(400).send({ error: err.message });
	} else if (err.message === "Entry does not exist") {
		return res.status(502).send({ error: err.message });
	}
	res.status(500).send({ error: "Internal Server Error" });
};
