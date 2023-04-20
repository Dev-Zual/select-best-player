const selectBtnS = document.getElementsByClassName("select-btn");
console.log(selectBtnS);

for (const btn of selectBtnS) {
  btn.addEventListener("click", function () {
    btn.setAttribute("disabled", true);
    const playerName = btn.parentNode.parentNode.children[0].innerText;

    const ul = document.getElementById("list-container");
    const li = document.createElement("li");
    li.innerText = playerName;
    ul.appendChild(li);
  });
}
