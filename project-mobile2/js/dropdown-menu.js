function menuIconChange(x) {
    var dropdown = document.getElementsByClassName("dropbtn");
    
    
    x.classList.toggle("change");
    if(x.classList.contains("change")) {
        document.getElementById("menu").classList.replace("hide-mobile", "mobile-menu");
    
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
            
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.replace("show", "hide");
            } else {
            dropdownContent.classList.replace("hide", "show");
            }
             });
        }
} else {
    document.getElementById("menu").classList.replace("mobile-menu", "hide-mobile");
    dropdownContent.classList.replace("show", "hide");
}
}

// function menuIconChange(x) {
//     var dropdown = document.getElementsByClassName("dropbtn");
//     var i;
    
//     // x.classList.toggle("change");
//     if(x.classList.contains("unchange")) {
//         x.classList.replace('unchange', 'change');
//         document.getElementById("menu").classList.replace("hide-mobile", "mobile-menu");
    
//         for (i = 0; i < dropdown.length; i++) {
//             dropdown[i].addEventListener("click", function() {
            
//             var dropdownContent = this.nextElementSibling;
//             if (dropdownContent.classList.contains("show")) {
//             dropdownContent.classList.replace("show", "hide");
//             } else {
//             dropdownContent.classList.replace("hide", "show");
//             }
//              });
//         }
// } else {
//     document.getElementById("menu").classList.replace("mobile-menu", "hide-mobile");
//     dropdownContent.classList.replace("show", "hide");
// }
// }


