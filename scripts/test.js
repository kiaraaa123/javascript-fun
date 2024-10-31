


const link = document.querySelector('#info a');
if (link) {
    link.href = "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates";
    link.textContent = "Straw Hat Pirates";
}






// Images and Headings
const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");

// Capture Original Content
const originalImageSrc = myImage.getAttribute("src");
const originalHeadingText = myHeading.textContent;
const originalPargraphContent = 

// One Piece Content
let paragraphContents = [
        "At the heart of the Grand Line, we’re a diverse crew of",

        "We believe in the freedom of navigation across the vast seas and the importance of bonds among crewmates. This journey of audacious dreams and relentless pursuit is crucial to our growth and our aspirations.",

        "Read more about our adventures and the values that drive us on our journey."
];

let listItemContents = [
        "adventurers",
        "dreamers",
        "pirates"
];

let link = document.querySelector('#info a');

// Mozilla Content


// Functions

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/luffy-flag.png");
        myHeading.textContent = "Luffy is Cool!";
        document.querySelectorAll('#info p').forEach((p, index) => {
        if (index < paragraphContents.length) {
        p.textContent = paragraphContents[index];
        }
        });
        document.querySelectorAll('#info ul li').forEach((li, index) => {
        if (index < listItemContents.length) {
        li.textContent = listItemContents[index];
    }
});

    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
        myHeading.textContent = "Mozilla is Cool!";
        
    }
};


// Content for paragraphs
const paragraphContents = [
    "At the heart of the Grand Line, we’re a diverse crew of adventurers, dreamers, and pirates.",
    "We believe in the freedom of navigation across the vast seas and the importance of bonds among crewmates.",
    "This journey of audacious dreams and relentless pursuit is crucial to our growth and our aspirations.",
    "Read more about our adventures and the values that drive us on our journey."
];

// Content for list items
const listItemContents = [
    "adventurers",
    "dreamers",
    "pirates"
];

// Applying paragraph content
document.querySelectorAll('#faq p').forEach((p, index) => {
    if (index < paragraphContents.length) {  // Ensure there is content for the element
        p.textContent = paragraphContents[index];
    }
});

// Applying list item content
document.querySelectorAll('#faq ul li').forEach((li, index) => {
    if (index < listItemContents.length) {  // Ensure there is content for the element
        li.textContent = listItemContents[index];
    }
});

// Change link if needed
const link = document.querySelector('#faq a');
if (link) {
    link.href = "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates";
    link.textContent = "Straw Hat Pirates";
}
