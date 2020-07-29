const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const incomesRouter = require("./routes/incomes");
const expenseRouter = require("./routes/expenses");

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(incomesRouter);
app.use(expenseRouter);

app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});
