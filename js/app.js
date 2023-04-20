const selectBtnS = document.getElementsByClassName("select-btn");
console.log(selectBtnS);
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

document.getElementById("calculate-btn").addEventListener("click", function () {
  const perPlayerField = document.getElementById("inputPerPlyaer");
  const perPlayerValue = parseFloat(perPlayerField.value);
  const displayExpenses = document.getElementById("player-expenses");
  displayExpenses.innerText = perPlayerValue * 5;
});
