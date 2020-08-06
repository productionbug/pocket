const { customAlphabet } = require("nanoid");
const moment = require("moment");

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
        if (income === null) {
            return next();
        }
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

        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }
        if (!title || !amount) {
            throw new Error("Title and Amount is required!");
        }

        const incomeId = nanoid();
        const dateCreated = moment().format("dddd[,] Do MMM YYYY");
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

const updateIncome = async (req, res, next) => {
    try {
        const id = req.params.id;

        let update = {};

        if (req.body.title) {
            update.title = req.body.title.trim();
        }
        if (req.body.amount) {
            update.amount = req.body.amount;
        }

        const income = await Income.findOneAndUpdate({ incomeId: id }, update, {
            new: true,
            runValidators: true,
        })
            .lean()
            .exec();

        if (income === null) {
            // throw new Error("Entry does not exist");
            return next();
        }
        console.log(income);
        res.send(income);
    } catch (e) {
        return next(e);
    }
};

const deleteAllIncomes = async (req, res, next) => {
    try {
        const income = await Income.deleteMany({});
        if (income === null) {
            // throw new Error("Entry does not exist");
            return next();
        }
        res.status(200).send({ income });
    } catch (e) {
        return next(e);
    }
};

const deleteSingleIncome = async (req, res, next) => {
    try {
        const id = req.params.id;
        const income = await Income.deleteOne({ incomeId: id });
        if (income === null) {
            // throw new Error("Entry does not exist");
            return next();
        }
        res.status(200).send({ income });
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    getAllIncomes,
    getSingleIncome,
    postIncome,
    updateIncome,
    deleteAllIncomes,
    deleteSingleIncome,
};
