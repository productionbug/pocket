const { customAlphabet } = require("nanoid");

const Expense = require("../models/expense.model");
const { fetchAllExpenses } = require("../utils/income-expense.utils");

const getAllExpenses = async (req, res, next) => {
	try {
		const expenses = await fetchAllExpenses();
		res.send({ message: "inside all expenses", expenses });
	} catch (e) {
		return next(e);
	}
};

const getSingleExpense = async (req, res, next) => {
	const id = req.params.id;
	try {
		const expense = await Expense.findOne({ expenseId: id }).lean().exec();
		if (expense === NULL) {
			return next();
		}
		res.send({ message: "inside single expenses", expense });
	} catch (e) {
		return next(e);
	}
};

const postExpense = async (req, res, next) => {
	try {
		const nanoid = customAlphabet(
			"1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQESTUVWXYZ",
			21
		);
		const title = req.body.title;
		const amount = req.body.amount;

		if (!title || !amount) {
			throw new Error("Title and Amount is required!");
		}

		const expenseId = nanoid();
		const dateCreated = "Today";
		const expense = await Expense.create({
			title,
			amount,
			dateCreated,
			expenseId,
		});

		res.status(201).send({
			message: "inside post expenses ",
			posted: expense.toObject(),
		});
	} catch (e) {
		return next(e);
	}
};

const updateExpense = (req, res, next) => {
	res.send({
		message: "inside update expenses ",
		updated: req.body.updateExpense,
	});
};

const deleteAllExpenses = (req, res, next) => {
	res.send({ message: "inside delete all expenses " });
};

const deleteSingleExpense = (req, res, next) => {
	res.send({ message: "inside delete single expenses " });
};

module.exports = {
	getAllExpenses,
	getSingleExpense,
	postExpense,
	updateExpense,
	deleteAllExpenses,
	deleteSingleExpense,
};
// TODO: finish income
// TODO: use moment to generate date in post expense
// TODO: validate the title and amount
// TODO: use findOneandUpdate to update the expense
// TODO: delete single Expense
// TODO: update all Expense
// TODO: Make virtual fetch Total Income and Total Expense
