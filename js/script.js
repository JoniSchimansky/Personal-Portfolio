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

// Only numbers on phone form input
var phoneInput = document.getElementById('phone-input');

phoneInput.addEventListener('input', function() {
    var value = phoneInput.value;

    var sanitizedValue = value.replace(/\D/g, '');

    phoneInput.value = sanitizedValue;
});

// Responsive menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}