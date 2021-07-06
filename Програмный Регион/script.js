var slideIndex_nav = 1;
showSlides_nav(slideIndex_nav);

function currentSlide_nav(n) {
    showSlides_nav(slideIndex_nav = n);
}

function showSlides_nav(n) {
    var i;
    var slides_nav = document.getElementsByClassName("slide-nav-items");
    var dots_nav = document.getElementsByClassName("slider-dots_item-nav");
    
    if (n > slides_nav.length) {
      slideIndex_nav = 1
    }
    if (n < 1) {
        slideIndex_nav = slides_nav.length
    }
    
    for (i = 0; i < slides_nav.length; i++) {
        slides_nav[i].style.display = "none";
        }
    
    for (i = 0; i < dots_nav.length; i++) {
        dots_nav[i].className = dots_nav[i].className.replace(" active", "");
    }
    slides_nav[slideIndex_nav - 1].style.display = "flex";
    dots_nav[slideIndex_nav - 1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("advantages-div-slide");
    var dots = document.getElementsByClassName("slider-dots_item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
        }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

var slideIndex_com = 1;
showSlides_com(slideIndex_com);

function currentSlide_com(n) {
    showSlides_com(slideIndex_com = n);
}

function showSlides_com(n) {
    var i;
    var slides_com = document.getElementsByClassName("comments-items-slide");
    var dots_com = document.getElementsByClassName("slider-dots_item-com");
    
    if (n > slides_com.length) {
      slideIndex_com = 1
    }
    if (n < 1) {
        slideIndex_com = slides_com.length
    }

    for (i = 0; i < slides_com.length; i++) {
         slides_com[i].style.display = "none";
    }
     
    for (i = 0; i < dots_com.length; i++) {
        dots_com[i].className = dots_com[i].className.replace("active", "");
    }
    slides_com[slideIndex_com - 1].style.display = "flex";
    dots_com[slideIndex_com - 1].className += " active";
}







