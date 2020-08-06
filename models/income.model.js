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

incomeSchema.pre("validate", function (next) {
	if (this.amount < 0) {
		console.log("Inside here");
		return next(new Error("Amount cannot be less than 0"));
	}
	return next();
});

const Income = mongoose.model("income", incomeSchema);

module.exports = Income;
