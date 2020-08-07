const Expense = require("../models/expense.model");
const Income = require("../models/income.model");
const fetchAllExpenses = function () {
    return Expense.find({}).exec();
};

const fetchAllIncomes = function () {
    return Income.find({}).exec();
};

const currentBalance = async () => {
    try {
        const allExpenses = await fetchAllExpenses();
        const allIncomes = await fetchAllIncomes();

        const totalExpense = allExpenses.reduce((acc, expense) => {
            return acc + expense.amount;
        });

        const totalIncome = allIncomes.reduce((acc, income) => {
            return acc + income.amount;
        });

        return {
            totalIncome,
            totalExpense,
            currentBalance: totalIncome - totalExpense,
        };
    } catch (e) {
        throw new Error("Problem fetching current balance");
    }
};

module.exports = {
    currentBalance,
    fetchAllExpenses,
    fetchAllIncomes,
};
