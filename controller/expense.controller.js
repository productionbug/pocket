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

		let update = {};

		if (req.body.title) {
			update.title = req.body.title.trim();
		}
		if (req.body.amount) {
			update.amount = req.body.amount;
		}

		const expense = await Expense.findOneAndUpdate(
			{ expenseId: id },
			update,
			{
				new: true,
				runValidators: true,
			}
		)
			.lean()
			.exec();

		if (expense === null) {
			//   throw new Error("Entry does not exist");
			return next();
		}

		res.send({
			expense,
		});
	} catch (e) {
		return next(e);
	}
};

const deleteAllExpenses = async (req, res, next) => {
	try {
		const expense = await Expense.deleteMany({});
		if (expense === null) {
			// throw new Error("Entry does not exist");
			return next();
		}
		res.status(200).send({ expense });
	} catch (e) {
		return next(e);
	}
};

const deleteSingleExpense = async (req, res, next) => {
	try {
		const id = req.params.id;
		const expense = await Expense.deleteOne({ expenseId: id });
		if (expense === null) {
			// throw new Error("Entry does not exist");
			return next();
		}
		res.status(200).send({ expense });
	} catch (e) {
		return next(e);
	}
};

module.exports = {
	getAllExpenses,
	getSingleExpense,
	postExpense,
	updateExpense,
	deleteAllExpenses,
	deleteSingleExpense,
};

// TODO: Make virtual fetch Total Income and Total Expense
