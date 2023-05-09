let modal = document.querySelector('.modalBG')
let closerBtn = document.querySelector('.button-closer')
// let BtnFeedback = document.querySelector('.button-feedback')
// let open = document.querySelector('.column-btn')
let openModal = document.querySelector('.openModal')
let mobileBtn = document.querySelector('.mobile-btn')

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
closerBtn.onclick = function() {
  modal.style.display = "none";
}

// BtnFeedback.onclick = function() {
//   modal.style.display = "block";
// }

// open.onclick = function() {
//   modal.style.display = "block";
// }
openModal.onclick = function() {
  modal.style.display = "block";
}
mobileBtn.onclick = function() {
  modal.style.display = "block"
}