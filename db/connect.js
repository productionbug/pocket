const mongoose = require("mongoose");

const connect = (url) =>
	mongoose.connect(
		url,
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
