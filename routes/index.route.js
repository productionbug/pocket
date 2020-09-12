const express = require("express");

const { getIndex } = require("../controller/index.controller");
const { postIncome } = require("../controller/income.controller");
const { postExpense } = require("../controller/expense.controller");
const router = express.Router();

router.get("/", getIndex);

router.post("/income-expense", (req, res, next) => {
	console.log(req.body);

	const select = req.body.incexpselect;

	if (select === "inc") {
		postIncome(req, res, next);
	} else if (select === "exp") {
		postExpense(req, res, next);
	} else {
		console.log("Invalid");
	}
});

module.exports = router;
