const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const connect = require("./db/connect");

const app = express();

// Getting all routers
const indexRouter = require("./routes/index");
const incomesRouter = require("./routes/incomes");
const expenseRouter = require("./routes/expenses");

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRouter);
app.use(incomesRouter);
app.use(expenseRouter);

const port = process.env.PORT || 3000;

connect()
	.then((connection) => {
		app.listen(port, () => {
			console.log(`Server is running at port: ${port}`);
		});
	})
	.catch((e) => {
		console.error(e);
	});
