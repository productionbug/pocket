const mongoose = require("mongoose");

const connect = () =>
	mongoose.connect(
		"mongodb://localhost:27017",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		},
		() => {
			console.log(`Database is running at port: 27017`);
		}
	);

module.exports = connect;
