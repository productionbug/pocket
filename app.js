const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const connect = require("./db/connect");
const controller404 = require("./controller/404.controller");

const app = express();

// Getting all routers
const indexRouter = require("./routes/index.route");
const incomesRouter = require("./routes/incomes.route");
const expenseRouter = require("./routes/expenses.route");

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRouter);
app.use(incomesRouter);
app.use(expenseRouter);

app.use(controller404);

const port = process.env.PORT || 3000;

connect("mongodb://localhost:27017/pocket")
	.then((connection) => {
		app.listen(port, () => {
			console.log(`Server is running at port: ${port}`);
		});
	})
	.catch((e) => {
		console.error(e);
	});
