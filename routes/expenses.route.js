const express = require("express");

const {
	getAllExpenses,
	getSingleExpense,
	postExpense,
	updateExpense,
	deleteAllExpenses,
	deleteSingleExpense,
} = require("../controller/expense.controller");

const router = express.Router();

/**
 * GET REQUEST FOR FETCHING ALL THE EXPENSES
 */
router.get("/expenses", getAllExpenses);

/**
 * GET REQUEST FOR FETCHING AN INDIVIDUAL EXPENSE
 */
router.get("/expense/:id", getSingleExpense);

router.get("/edit-expense-page", (req, res, next) => {
	// console.log(req.query);
	if (req.query) {
		res.render("../views/edit-expense.ejs", {
			productId: req.query.expenseId,
			title: req.query.title,
			amount: req.query.amount,
		});
	} else {
		next();
	}
});
/**
 * POST REQUEST FOR POSTING AN INDIVIDUAL EXPENSE
 */

// router.post("/expense", postExpense);

/**
 * PUT REQUEST FOR UPDATING AN INDIVIDUAL EXPENSE INFORMATION
 */

router.post("/expense/:id", updateExpense);

/**
 * DELETE REQUEST FOR DELETING ALL EXPENSES
 */
router.delete("/expenses", deleteAllExpenses);

/**
 * DELETE REQUEST FOR DELETING AN INDIVIDUAL EXPENSE
 */

router.delete("/expense/:id", deleteSingleExpense);

module.exports = router;
