const selectBtnS = document.getElementsByClassName("select-btn");

let count = 1;
for (const btn of selectBtnS) {
  btn.addEventListener("click", function () {
    const playerName = btn.parentNode.parentNode.children[0].innerText;

    const ul = document.getElementById("list-container");
    const li = document.createElement("li");
    li.innerText = playerName;
    ul.appendChild(li);
    btn.setAttribute("disabled", true);
  });
}

function getInputValueId(id) {
  const inputField = document.getElementById(id);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerValue = getInputValueId("inputPerPlyaer");
  if (isNaN(perPlayerValue)) {
    return alert("please input valid number");
  }
  const displayExpenses = document.getElementById("player-expenses");
  displayExpenses.innerText = perPlayerValue * 5;
});

document.getElementById("total-btn").addEventListener("click", function () {
  const managerValue = getInputValueId("manager");
  const coachValue = getInputValueId("coach");
  if (isNaN(managerValue || coachValue)) {
    return alert("please input valid number");
  }
  const displayExpenses = document.getElementById("player-expenses");
  const displayExpensesValue = parseFloat(displayExpenses.innerText);
  const total = managerValue + coachValue + displayExpensesValue;
  const displayTotal = document.getElementById("display-total");
  displayTotal.innerText = total;
});
