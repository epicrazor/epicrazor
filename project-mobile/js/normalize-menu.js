if (767 < window.screen.width) {  
  document.getElementById("menu").classList.remove('mobile-menu');

  var btnunhide = document.getElementById("dropbtn");
  var btnhide = document.getElementById("megaMenu");

  btnunhide.setAttribute("onmouseover","openMega(event)");
  btnhide.setAttribute("onmouseleave","closeMega(event)");
 
  


  function openMega(event){
    var unhide = document.getElementById("megaMenu");
    
    unhide.style.display = "grid";
    console.log("open");
   
  
  }
  
  function closeMega(event){
    var hide = document.getElementById("megaMenu");
    hide.style.display = "none";
    console.log("close");
  }


}



