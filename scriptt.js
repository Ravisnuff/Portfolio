// script.js

// Example: Add a simple animation to elements with the "experience-item" class
const experienceItems = document.querySelectorAll(".experience-item");

experienceItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-50px)";
    
    setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
        item.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    }, index * 300); // Delay the animation for each item
});

const educationitem = document.querySelectorAll(".education-item");

educationitem.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-50px)";
    
    setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
        item.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    }, index * 300); // Delay the animation for each item
});

// script.js

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.filter = "blur(0)";
        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.style.filter = "blur(5px)";
            }
        });
    });

    card.addEventListener("mouseleave", () => {
        cards.forEach((otherCard) => {
            otherCard.style.filter = "blur(0)";
        });
    });
});

