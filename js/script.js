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


// Contact
(function() {
    emailjs.init('service_3f4qedi');
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var templateParams = {
            full_name: document.getElementById('full_name').value,
            email: document.getElementById('email').value,
            phone_number: document.getElementById('phone_input').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('Correo electrónico enviado correctamente', response);
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
            }, function(error) {
                console.error('Error al enviar el correo electrónico', error);
                document.getElementById('errorMessage').style.display = 'block';
                document.getElementById('successMessage').style.display = 'none';
            });
    });
})();