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
