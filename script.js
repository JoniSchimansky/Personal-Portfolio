function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const skills = document.getElementById("skills-link");
const projects = document.getElementById("projects-link");
const experience = document.getElementById("experience-link");

skills.addEventListener('click', () => {
    scrollToElement('.header');
});

projects.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

experience.addEventListener('click', () => {
    scrollToElement('.header', 2);
});

// Theme toogle mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const logoImage = document.getElementById("logo-image");
const footerImage = document.getElementById("footer-logo");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.style.setProperty("--background-color", "var(--light-background-color)");
    logoImage.src = "images/blue-logo.png";
    footerImage.src = "images/blue-logo.png";
  } else {
    body.style.setProperty("--background-color", "var(--dark-background-color)");
    logoImage.src = "images/logo.png";
    footerImage.src = "images/logo.png";
  }
});

if (themeToggle.checked) {
  body.style.setProperty("--background-color", "var(--light-background-color)");
  logoImage.src = "images/blue-logo.png";
  footerImage.src = "images/blue-logo.png";
} else {
  body.style.setProperty("--background-color", "var(--dark-background-color)");
  logoImage.src = "images/logo.png";
  footerImage.src = "images/logo.png";
}