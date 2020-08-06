const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const incomeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            validate: {
                validator: function (amount) {
                    return amount > 0;
                },
                message: `Amount must be greater than 0`,
            },
        },
        dateCreated: {
            type: String,
            required: true,
        },
        incomeId: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const Income = mongoose.model("income", incomeSchema);

module.exports = Income;
