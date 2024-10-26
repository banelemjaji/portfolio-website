const titles = ["Software Developer", "Mobile Developer"];
let currentTitleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = 90; // Speed of typing
const wait = 1500; // Wait time between word changes

function typeWriterEffect() {
    const titleElement = document.getElementById("changing-title");
    const fullTitle = titles[currentTitleIndex];

    if (isDeleting) {
        titleElement.textContent = fullTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        titleElement.textContent = fullTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === fullTitle.length) {
        setTimeout(() => (isDeleting = true), wait);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }

    const typingSpeed = isDeleting ? speed / 2 : speed;
    setTimeout(typeWriterEffect, typingSpeed);
}

const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

typeWriterEffect();
