window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stick");
  } else {
    header.classList.remove("stick");
  }
}