const getAllExpenses = (req, res, next) => {
  res.send({ message: "inside all expenses " });
};

const getSingleExpense = (req, res, next) => {
  res.send({ message: "inside single expenses " });
};

const postExpense = (req, res, next) => {
  res.send({ message: "inside post expenses ", posted: req.body.expense });
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
