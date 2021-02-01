var pageCounter = 1; //for dynamic pages load 
var products = document.getElementById("products");
var btn = document.getElementById("load-more-btn");
    btn.addEventListener("click", function () { //on button click - request GET data from URL
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', '/project-mobile/js/products-' + pageCounter + '.json');
        ourRequest.onload = function() {
            if (ourRequest.status >= 200 && ourRequest.status < 400) { //basic error handling
                var ourData = JSON.parse(ourRequest.responseText); //turn recieved array into a JSON
                renderHTML(ourData);
            } else {
                console.log("we conn to srv but it error");
            }  
};

ourRequest.onerror = function(){
    console.log("conn error");
}

ourRequest.send();
pageCounter++;
if (pageCounter > 2){ //hide the button when all urls are used
    btn.style.display = 'none';
}
});

function renderHTML (data) {
    var htmlString = "";  //create empty html string variable, which will be repeated and "filled" for loop
    
    

    for (i = 0; i < data.length; i++){ // 0 - 1й элемент массива; пока i меньше длины массива; увеличивать с каждым "кругом" цикла на 1
      //  htmlString += '<p class="para">' + data[i].name + " is a " + data[i].price + " that likes to eat ";
        htmlString += '<a href="404.html" class="hide-mobile">'+
                        '<figure class="product-item">' +
                        '<img src="' + data[i].photo + '" alt="">'+
                        '<figcaption class ="product-label"><p>' + data[i].name + '</p>'+
                        '<p class="price">$'+ data[i].price +
                        '<div class="btns-hover"><button class="to-cart-btn" type="button"><i class="bi bi-plus"></i></button><button class="to-wishlist-btn" type="button"><i class="bi bi-heart-fill"></i></button>'+
                        '</div></figcaption></figure>'



    }

    products.insertAdjacentHTML('beforeend', htmlString);
}













