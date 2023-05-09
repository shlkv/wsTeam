// кнопки переключения разделов портфолио
let portfolioBtn1 = document.querySelector('.portfolio-btn1')
let portfolioBtn2 = document.querySelector('.portfolio-btn2')
let portfolioBtn3 = document.querySelector('.portfolio-btn3')
let portfolioBtn4 = document.querySelector('.portfolio-btn4')

// блоки десктопной версии 
let portfolioBlock1 = document.querySelector('.portfolio__main1')
let portfolioBlock2 = document.querySelector('.portfolio__main2')
let portfolioBlock3 = document.querySelector('.portfolio__main3')
// let portfolioBlock4 = document.querySelector('.portfolio__main4')

// блоки мобильной версии
let portfolioMobile1 = document.querySelector('.carouselSlider1')
let portfolioMobile2 = document.querySelector('.carouselSlider2')
let portfolioMobile3 = document.querySelector('.carouselSlider3')
let portfolioMobile4 = document.querySelector('.carouselSlider4')

portfolioBtn1.onclick = function() {
  portfolioBlock1.style.display = "block";
  portfolioBlock2.style.display = "none";
  portfolioBlock3.style.display = "none";
  // portfolioBlock4.style.display = "none";

  portfolioMobile1.style.display = "block";
  portfolioMobile2.style.display = "none";
  portfolioMobile3.style.display = "none";
  portfolioMobile4.style.display = "none";

  portfolioBtn1.classList.add("portfolio-btn--active")
  portfolioBtn2.classList.remove("portfolio-btn--active")
  portfolioBtn3.classList.remove("portfolio-btn--active")
  portfolioBtn4.classList.remove("portfolio-btn--active")
}


portfolioBtn2.onclick = function() {
  portfolioBlock2.style.display = "block";
  portfolioBlock1.style.display = "none";
  portfolioBlock3.style.display = "none";
  // portfolioBlock4.style.display = "none";

  portfolioMobile2.style.display = "block";
  portfolioMobile1.style.display = "none";
  portfolioMobile3.style.display = "none";
  portfolioMobile4.style.display = "none";

  portfolioBtn2.classList.add("portfolio-btn--active")
  portfolioBtn1.classList.remove("portfolio-btn--active")
  portfolioBtn3.classList.remove("portfolio-btn--active")
  portfolioBtn4.classList.remove("portfolio-btn--active")
}


portfolioBtn3.onclick = function() {
  portfolioBlock3.style.display = "block";
  portfolioBlock1.style.display = "none";
  portfolioBlock2.style.display = "none";
  // portfolioBlock4.style.display = "none";

  portfolioMobile3.style.display = "block";
  portfolioMobile1.style.display = "none";
  portfolioMobile2.style.display = "none";
  portfolioMobile4.style.display = "none";

  portfolioBtn3.classList.add("portfolio-btn--active")
  portfolioBtn1.classList.remove("portfolio-btn--active")
  portfolioBtn2.classList.remove("portfolio-btn--active")
  portfolioBtn4.classList.remove("portfolio-btn--active")
}


portfolioBtn4.onclick = function() {
  portfolioMobile4.style.display = "block";
  portfolioMobile1.style.display = "none";
  portfolioMobile2.style.display = "none";
  portfolioMobile3.style.display = "none";

  portfolioBtn4.classList.add("portfolio-btn--active")
  portfolioBtn1.classList.remove("portfolio-btn--active")
  portfolioBtn2.classList.remove("portfolio-btn--active")
  portfolioBtn3.classList.remove("portfolio-btn--active")
}