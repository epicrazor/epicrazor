var modal = document.getElementById('loginBox');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}

function togglePass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }