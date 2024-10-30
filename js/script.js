const titles = ["Software Developer", "Mobile Developer"];
let currentTitleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 90; // Speed of typing
const pause = 1500; // Wait time between words

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
        setTimeout(() => (isDeleting = true), pause);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }

    const currentSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
    setTimeout(typeWriterEffect, currentSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriterEffect();
});
