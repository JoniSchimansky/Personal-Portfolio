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

themeToggle.addEventListener("change", () => {
  const body = document.body;
  if (themeToggle.checked) {
    body.style.setProperty("--background-color", "var(--dark-background-color)");
  } else {
    body.style.setProperty("--background-color", "var(--light-background-color)");
  }
});