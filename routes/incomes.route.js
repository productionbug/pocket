const express = require("express");

const {
	getAllIncomes,
	getSingleIncome,
	postIncome,
	updateIncome,
	deleteAllIncomes,
	deleteSingleIncome,
} = require("../controller/income.controller");

const router = express.Router();

/**
 * GET REQUEST FOR FETCHING ALL THE INCOMES
 */
router.get("/incomes", getAllIncomes);

/**
 * GET REQUEST FOR FETCHING AN INDIVIDUAL INCOME
 */
router.get("/income/:id", getSingleIncome);

/**
 * POST REQUEST FOR POSTING AN INDIVIDUAL INCOME
 */

// router.post("/income", postIncome);

/**
 * PUT REQUEST FOR UPDATING AN INDIVIDUAL INCOME INFORMATION
 */

router.put("/income/:id", updateIncome);

/**
 * DELETE REQUEST FOR DELETING ALL INCOMES
 */
router.delete("/incomes", deleteAllIncomes);

/**
 * DELETE REQUEST FOR DELETING AN INDIVIDUAL INCOME
 */

router.delete("/income/:id", deleteSingleIncome);

module.exports = router;
