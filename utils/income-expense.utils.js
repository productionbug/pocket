const Expense = require("../models/expense.model");
const Income = require("../models/income.model");
const fetchAllExpenses = function () {
    return Expense.find({}).exec();
};

const fetchAllIncomes = function () {
    return Income.find({}).exec();
};

const totalIncome = async () => {
    const allIncomes = await fetchAllIncomes();
    let sum = 0;
    for (let income of allIncomes) {
        sum += income.amount;
    }
    return sum;
};
const totalExpense = async () => {
    const allExpenses = await fetchAllExpenses();
    let sum = 0;
    for (let expense of allExpenses) {
        sum += expense.amount;
    }
    return sum;
};

module.exports = {
    totalExpense,
    totalIncome,
    fetchAllExpenses,
    fetchAllIncomes,
};
