$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
});

// Read more text
function toggleText() {
    var hiddenText = document.getElementById("hidden-text");
    var btn = document.getElementById("read-more-btn");

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }

    if (hiddenText.style.maxHeight) {
        hiddenText.style.maxHeight = null;
        hiddenText.style.opacity = "0";
        btn.textContent = "Read More";
    } else {
        hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
        hiddenText.style.opacity = "1";
        btn.textContent = "Close";
    }
}

// Responsive menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 150;

    sections.forEach(sec => {
        if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${sec.getAttribute('id')}"]`).classList.add('active');
        }
    });
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
