const Expense = require("../models/expense.model");

const fetchAllExpenses = function () {
	return Expense.find({});
};

module.exports = {
	fetchAllExpenses,
};
