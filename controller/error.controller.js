const e = require("express");

module.exports = (err, req, res, next) => {
	// console.log(err);

	if (err.message === "Title and Amount is required!") {
		return res.status(400).send({ error: err.message });
	} else if (err.message === "Entry does not exist") {
		return res.status(502).send({ error: err.message });
	} else if (err.message.includes("Amount must be greater than 0")) {
		return res.status(502).send({ error: "Amount must be greater than 0" });
	} else if (err.message.includes("Title is required")) {
		return res.status(400).send({ error: "Title is required" });
	}
	res.status(500).send({ error: err.message });
};
