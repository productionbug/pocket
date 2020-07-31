const Expense = require("../models/expense.model");
const Income = require("../models/income.model");
const fetchAllExpenses = function () {
	return Expense.find({});
};

const fetchAllIncomes = function () {
	return Income.find({});
};

module.exports = {
	fetchAllExpenses,
	fetchAllIncomes,
};
