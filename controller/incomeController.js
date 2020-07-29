const getAllIncomes = (req, res, next) => {
	res.json({ message: "Inside all incomes route" });
};

const getSingleIncome = (req, res, next) => {
	res.json({ message: "Inside single income route" });
};

const postIncome = (req, res, next) => {
	res.json({ message: "Inside post income route" });
};

const updateIncome = (req, res, next) => {
	res.json({ message: "Inside update income route" });
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
