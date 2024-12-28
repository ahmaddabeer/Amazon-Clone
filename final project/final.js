//---------------------------------------------------------------//

// Define an array of light colors
const colors = ["#FFDDCC", "#CCFFCC", "#FFFFCC"]; // Light pink, green, creamy

// Function to set a random background color
function setRandomBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Call the function to set the background color
setRandomBackgroundColor();


// Set the random background color on page load
setRandomBackgroundColor();
//------------------------------------------------------------//
// Add event listener to the search input
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    alert('This Amazon clone by Dabeer Ahmad is for learning purposes only and is not an official Amazon site');
});

// Change language dynamically
const languageDropdown = document.querySelector('.selectlan');
const languageText = document.querySelector('.language p'); // Selects the 'EN' text

languageDropdown.addEventListener('change', () => {
    const selectedLanguage = languageDropdown.value;
    languageText.textContent = selectedLanguage; // Update displayed language
});
//-------------------------------------------------------------------------

// Array of messages for h1 and h3
const h1Messages = [
    "New Year, now you",
    "Exciting Offers Await!",
    "Start Fresh with Style",
    "Celebrate the New Year"
];

const h3Messages = [
    "Shop deals",
    "New Deals Every Day",
    "For a Special New Year",
    "Best Prices Just for You"
];


// Elements to update
const h1Element = document.querySelector(".nave_down");
const h3Element = document.querySelector(".shop_deals");

// Function to type text with animation
function typeText(element, messages, index = 0, charIndex = 0) {
    if (index >= messages.length) {
        index = 0; // Restart messages when reaching the end
    }

    const currentMessage = messages[index];

    if (charIndex < currentMessage.length) {
        element.textContent += currentMessage[charIndex]; // Add one character
        setTimeout(() => typeText(element, messages, index, charIndex + 1), 100); // Type next character
    } else {
        // Wait for 2 seconds, then move to the next message
        setTimeout(() => {
            element.textContent = ""; // Clear text
            typeText(element, messages, index + 1); // Start typing the next message
        }, 3000);
    }
}

// Start typing animation for both elements
typeText(h1Element, h1Messages);
setTimeout(() => {
    typeText(h3Element, h3Messages);
}, 3000); // Delay h3 typing by 2 seconds to sync with h1
