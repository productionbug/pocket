const {
    totalExpense,
    totalIncome,
    fetchAllExpenses,
    fetchAllIncomes,
} = require("../utils/income-expense.utils");

module.exports.getIndex = async (req, res, next) => {
    console.log("Total Expense = ", await totalExpense());
    console.log("Total Income = ", await totalIncome());

    res.json({ meessage: "inside the index controller" });
};

// TODO: fetch all expenses
// TODO: fetch all incomes
// TODO: fetch calculated total income
// TODO: fetch calculated total expense
