let burger = document.querySelector('.navbar-collapse')
let button = document.querySelector('.navbar-toggler')
let closer = document.querySelector('.navbar-closer')

burger.onclick = function(event) {
    // if (event.target == burger) {
        burger.style.display = "none";
    // }
  }

closer.onclick = function() {
  burger.style.display = "none";
}



button.onclick = function() {
  burger.style.display = "block";
}  