
const headerBurger = document.getElementById('nav-toggle');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
});

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


$(function() {

    var header = $("#header"), 
        headerH = header.innerHeight(),
        scrollOffset = 0;
  
    $(window).on("scroll", function() {
      if ($(window).width() < 990) {
        scrollOffset = $(this).scrollTop();
  
        var activationOffset = headerH * 2;
  
        if (scrollOffset >= headerH) {
          header.addClass("header--fixed");
        } else {
          header.removeClass("header--fixed");
        }
      }
    });
  
  });

// const openPopUp = document.getElementById("popup-open");

// const closePopUp =  document.getElementById("popup-close");
// const PopUp = document.getElementById("popup");

// openPopUp.addEventListener('click', function(e) {
//     e.preventDefault();
//     PopUp.classList.add('active');
// });

// closePopUp.addEventListener('click', () => {
//     PopUp.classList.remove('active');
// });
