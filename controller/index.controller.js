const {
    currentBalance,
    fetchAllExpenses,
    fetchAllIncomes,
} = require("../utils/income-expense.utils");

module.exports.getIndex = async (req, res, next) => {
    try {
        console.log("Total Income = ", await currentBalance().totalIncome);
        console.log("Total Expense = ", await currentBalance().totalExpense);
        console.log(
            "Current Balance = ",
            await currentBalance().currentBalance
        );
        res.json({ meessage: "inside the index controller" });
    } catch (e) {
        //!dont send the error to the controller

        console.log(e);
    }
};

// TODO: fetch all expenses
// TODO: fetch all incomes
// TODO: fetch calculated total income
// TODO: fetch calculated total expense
