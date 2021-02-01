let cart = document.getElementById('js-cart');
let wishlist = document.getElementById('js-wishlist');


// var buttonTarget = document.getElementsByClassName("tstbtn");
var listvalue = 0;
var cartvalue = 0;

function wishPlus(){  
  listvalue++;
  wishlist.innerHTML =  listvalue;
}
function cartPlus(){  
    cartvalue++;
    cart.innerHTML =  cartvalue;
  }