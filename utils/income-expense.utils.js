const Expense = require("../models/expense.model");
const Income = require("../models/income.model");

const fetchAllExpenses = function () {
	return Expense.find({}).exec();
};

const fetchAllIncomes = function () {
	return Income.find({}).exec();
};

const totalIncome = async () => {
	try {
		const allIncomes = await fetchAllIncomes();

		const totalInc = allIncomes.reduce((acc, income) => {
			return acc + income.amount;
		}, 0);

		return totalInc;
	} catch (e) {
		throw new Error("All Incomes not available");
	}
};

const totalExpense = async () => {
	try {
		const allExpenses = await fetchAllExpenses();

		const totalExp = allExpenses.reduce((acc, expense) => {
			return acc + expense.amount;
		}, 0);

		return totalExp;
	} catch (e) {
		throw new Error("All Expenses not available");
	}
};

const currentBalance = async () => {
	try {
		const totalInc = await totalIncome();
		const totalExp = await totalExpense();
		return totalInc - totalExp;
	} catch (e) {
		throw new Error("Problem fetching current balance");
	}
};

module.exports = {
	currentBalance,
	totalIncome,
	totalExpense,
	fetchAllExpenses,
	fetchAllIncomes,
};
