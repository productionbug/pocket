const { customAlphabet } = require("nanoid");
const moment = require("moment");

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
		if (expense === null) {
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
		const title = req.body.title.trim();
		const amount = req.body.amount;

		if (!title || !amount) {
			throw new Error("Title and Amount is required!");
		}

		const expenseId = nanoid();
		const dateCreated = moment().format("dddd[,] Do MMM YYYY");
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

const updateExpense = async (req, res, next) => {
	try {
		const id = req.params.id;
		// ! Refactor to make a validation middleware
		let update = {};

		if (req.body.title) {
			update.title = req.body.title.trim();
		}
		if (req.body.amount) {
			update.amount = req.body.amount;
		}

		// TODO: validate the title and amount by mongoose custom validator functions
		const expense = await Expense.findOneAndUpdate(
			{ expenseId: id },
			update,
			{ new: true, runValidators: true }
		)
			.lean()
			.exec();

		// TODO: check if expense is null
		if (expense === null) {
			throw new Error("Entry does not exist");
		}

		res.send({
			expense,
		});
	} catch (e) {
		return next(e);
	}
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

// TODO: validate the title and amount --> title cannot be empty and amount cannot be negative by using custom mongooose validator functions
// TODO: use findOneandUpdate to update the expense
// TODO: delete single Expense
// TODO: update all Expense and fetch the mongo update date and pass it to moment
// TODO: Make virtual fetch Total Income and Total Expense
