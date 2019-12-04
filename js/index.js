// Your code goes here
// SELECTORS
const navLinks = document.querySelectorAll(".nav-link");
const navContainer = document.querySelector(".nav-container");
const page = document.getElementsByTagName("html")[0];
const imageCollection = document.querySelectorAll("img");

// EVENT LISTENERS

//[1, 2] MOUSEOVER, MOUSELEAVE
navLinks.forEach((navLink) => {
    navLink.style.padding = "7px";
    //1.  MOUSEOVER
    navLink.addEventListener('mouseover', (event) => {
        navLink.style.padding = "5px";
        navLink.style.backgroundColor = "#17A2B8";
        navLink.style.color = "#FFFFFF";
        navLink.style.border = "1px dashed #212529";
        navLink.style.borderRadius = "3px";
    })
    //2. MOUSELEAVE
    navLink.addEventListener('mouseleave', (event) => {
        navLink.style.backgroundColor = "#FFFFFF";
        navLink.style.color = "#212529";
        navLink.style.border = "";
    })
    // Stop refreshing the page.
    navLink.addEventListener('click', (event) => event.preventDefault());
});

//[3] KEYDOWN EVENT
window.addEventListener('keydown', (event) => {
    // change the page background to a random color
    page.style.transition = "background-color 500ms linear";
    page.style.backgroundColor = randomColor();
});

//[4] SCROLLING
window.addEventListener('wheel', (event) => {
    // change NAV background to a random color 
    navContainer.style.transition = "background-color 1000ms linear";
    navContainer.style.backgroundColor = randomColor();
});

//[5] DRAGGING
imageCollection.forEach((img) => {
    // click and drag to scale down image.
    // hold down the ctrl key while dragging to scale up.
    img.addEventListener('drag', (event) => {
        img.width += (img.width < 25) ? 10:(event.ctrlKey) ? 10:-10;
    });
});

function randomColor() {
    const randomInt = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${randomInt(0,254)}, ${randomInt(0, 254)}, ${randomInt(0, 254)})`;
}