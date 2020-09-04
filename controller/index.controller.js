const incomeExpenseUtil = require("../utils/income-expense.utils");

module.exports.getIndex = async (req, res, next) => {
	try {
		const totalIncome = await incomeExpenseUtil.totalIncome();
		const totalExpense = await incomeExpenseUtil.totalExpense();
		const currentBalance = await incomeExpenseUtil.currentBalance();
		const allExpenses = await incomeExpenseUtil.fetchAllExpenses();
		const allIncomes = await incomeExpenseUtil.fetchAllIncomes();

		res.render("../views/index.ejs", {
			totalExpense: totalExpense,
			totalIncome: totalIncome,
			currentBalance: currentBalance,
			allIncomes: allIncomes,
			allExpenses: allExpenses,
		});
	} catch (e) {
		// ! dont send the error to the controller
		console.log(e);
	}
};

// TODO: fetch all expenses
// TODO: fetch all incomes
// TODO: fetch calculated total income
// TODO: fetch calculated total expense
