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