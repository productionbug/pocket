const Expense = require("../models/expense.model");

const fetchAllExpenses = function () {
  return Expense.find({});
};

const fetchAllIncomes = function () {
  return Expense.find({});
};

module.exports = {
  fetchAllExpenses,
  fetchAllIncomes,
};
