const Expense = require("../models/expense.model");
const Income = require("../models/income.model");
const fetchAllExpenses = function () {
	return Expense.find({}).exec();
};

const fetchAllIncomes = function () {
	return Income.find({}).exec();
};

module.exports = {
	fetchAllExpenses,
	fetchAllIncomes,
};
