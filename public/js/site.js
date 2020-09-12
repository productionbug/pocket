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

function getEditPage(e, id) {
	const expenseTitle = document.querySelector(".expense-title-" + id);
	const expenseAmount = document.querySelector(".expense-amount-" + id);
	console.log(expenseTitle.innerHTML);
	console.log(expenseAmount.innerHTML);

	const data = {
		title: expenseTitle.innerHTML,
		amount: expenseAmount.innerHTML,
		expenseId: id,
	};
	const path = "/edit-expense-page/?";

	const url =
		path +
		Object.keys(data)
			.map((key) => `${key}=${data[key]}`)
			.join("&");

	fetch(url, {
		method: "GET",
	}).then((response) => {});
}
