var toggle = document.getElementById("navbar-toggler");
var toggle2 = document.getElementById("navbar-toggler2");

toggle.onclick = function () {
  Menu();
};
toggle2.onclick = function () {
  Menu2();
};

function Menu() {
  let item = toggle;
  let list = document.querySelector("ul");
  item.name === "menu" ? (item.name = "close") : (item.name = "menu");
  item.name === "close"
    ? list.classList.add("left-[0px]")
    : list.classList.remove("left-[0px]");
}
function Menu2() {
  let item = toggle;
  let list = document.querySelector("ul");
  item.name === "menu" ? (item.name = "close") : (item.name = "menu");
  item.name === "close";
  list.classList.remove("left-[0px]");
}
