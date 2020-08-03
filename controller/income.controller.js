const { customAlphabet } = require("nanoid");

const Income = require("../models/income.model");
const { fetchAllIncomes } = require("../utils/income-expense.utils");

const getAllIncomes = async (req, res, next) => {
  try {
    const incomes = await fetchAllIncomes();
    res.send({ message: "Inside all incomes route", incomes });
  } catch (e) {
    next(e);
  }
};

const getSingleIncome = async (req, res, next) => {
  const id = req.params.id;
  try {
    const income = await Income.findOne({ incomeId: id }).lean().exec();
    res.json({ message: "Inside single income route", income });
  } catch (e) {
    next(e);
  }
};

const postIncome = async (req, res, next) => {
  try {
    const nanoid = customAlphabet(
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQESTUVWXYZ",
      21
    );
    const title = req.body.title;
    const amount = req.body.amount;
    const incomeId = nanoid();
    const dateCreated = "Today";
    const income = await Income.create({
      title,
      amount,
      dateCreated,
      incomeId,
    });
    res.status(201).send({
      message: "Inside post income route",
      posted: income.toObject(),
    });
  } catch (e) {
    next(e);
  }
};

const updateIncome = (req, res, next) => {
  res.json({
    message: "Inside update income route",
    updated: req.body.incomeUpdate,
  });
};

const deleteAllIncomes = (req, res, next) => {
  res.json({ message: "Inside delete all incomes route" });
};

const deleteSingleIncome = (req, res, next) => {
  res.json({ message: "Inside delete single income route" });
};

module.exports = {
  getAllIncomes,
  getSingleIncome,
  postIncome,
  updateIncome,
  deleteAllIncomes,
  deleteSingleIncome,
};
