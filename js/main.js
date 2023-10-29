AOS.init();


window.addEventListener("load", () => {
  this.setTimeout(() => {
    document
      .querySelector(".spinnerContainer")
      .classList.add("loader1--hidden");
    document
      .querySelector(".spinnerContainer")
      .classList.remove("loader1--visible");
    
  },2500);
  this.setTimeout(() => {
    document.querySelector(".spinnerContainer").classList.add("hidden");
  }, 3000);
});


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



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



