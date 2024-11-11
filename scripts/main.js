// Variables

// Heading & Image
const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");
const link = document.querySelector('#info a');

// Original Content
const originalImageSrc = myImage.getAttribute("src");
const originalHeadingText = myHeading.textContent;
const originalPargraphContent = [
    "At Mozilla, we're a global community of",

    "working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.",

    "Read the Mozilla Manifesto to learn even more about the values and principles that guide the pursuit of our mission."
];
const originalListItems = [
    "technologists",
    "thinkers",
    "builders"
]

// New Content
let newParagrahContent = [
        "At the heart of the Grand Line, we’re a diverse crew of",

        "We believe in the freedom of navigation across the vast seas and the importance of bonds among crewmates. This journey of audacious dreams and relentless pursuit is crucial to our growth and our aspirations.",

        "Read more about our adventures and the values that drive us on our journey."
];

let listItemContents = [
        "adventurers",
        "dreamers",
        "pirates"
];


// --------------------------------------------------------- //


// Function

// Change Content On Image Click
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    // Check for Current Image -- Change to new content if OG content is present
    if (mySrc === "images/firefox-icon.png") {
        // Change image and heading
        myImage.setAttribute("src", "images/luffy-flag.png");
        myHeading.textContent = "Luffy is Cool";
        
        // Change link
        if (link.getAttribute('href') === "https://www.mozilla.org/en-US/about/manifesto/") {
            link.setAttribute('href', "https://onepiece.fandom.com/wiki/Straw_Hat_Pirates");
            link.textContent = "Read more about our adventures";
        
            // Change paragraph elements
            document.querySelectorAll('#info p').forEach((p, index) => {
                if (index < newParagrahContent.length) {
                    p.textContent = newParagrahContent[index];
                }
            });
            
            // Change list items
            document.querySelectorAll('#info ul li').forEach((li, index) => {
                if (index < listItemContents.length) {
                    li.textContent = listItemContents[index];
                }
            });
        }
        
    // If the OG content is not present, change back to OG content
    } else {
        // Change image and heading
        myImage.setAttribute("src", "images/firefox-icon.png");
        myHeading.textContent = "Mozilla is Cool";
        
        // Change link
        link.setAttribute('href', "https://www.mozilla.org/en-US/about/manifesto/");
        link.textContent = "Read the Mozilla Manifesto";

        // Change paragraph elements
        document.querySelectorAll('#info p').forEach((p, index) => {
            if (index < originalPargraphContent.length) {
                p.textContent = originalPargraphContent[index];
            }
        });

        // Change list items
        document.querySelectorAll('#info ul li').forEach((li, index) => {
            if (index < originalListItems.length) {
                li.textContent = originalListItems[index];
            }
        });
    };
};


// --------------------------------------------------------- //

// Heading Customization

// Storing the button and h1 as variables
let myButton = document.querySelector("button");
let newHeading = document.querySelector("h1");

// Creating a function to ask for the name, store the name using localStorage, then add the name to the heading
function setUserName() {
    const myName = prompt("Please enter your name.");
    // Check if user entered blank name
    if (!myName) {
        setUserName ();
    } else { // run the rest of the function to add name in heading
        localStorage.setItem("name", myName);
        newHeading.textContent += `, ${myName}`;
    }
    
}

// Check if the name is stored, runs the function if not. Retrieves the name if it is stored
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent += `, ${storedName}`;
}

// Add event listener
myButton.onclick = () => {
    setUserName();
}