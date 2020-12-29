function createDate() {
	const [month, date, year] = new Date().toLocaleDateString().split("/");
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	document.querySelector(".nav-link--date").innerHTML = `${
		monthNames[month - 1]
	} ${date} ${year}`;
}

function deleteIncome(e, id) {
	const url = "/income/" + id;

	fetch(url, {
		method: "DELETE",
	}).then((response) => {
		return;
	});
}

function deleteExpense(e, id) {
	const url = "/expense/" + id;

	fetch(url, {
		method: "DELETE",
	}).then((response) => {
		return;
	});
}

createDate();
