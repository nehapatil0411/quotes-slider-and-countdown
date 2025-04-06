const quotes = [
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "If at first you don’t succeed, try, try again.",
    "If you want something done right, do it yourself.",
    "Life is like a box of chocolates. You never know what you’re gonna get.",
    "United we stand, divided we fall."
];


const colors = ["#33fff9", "#f633ff", "#ff3374", "#ffbb33", "#33ff99"];
let index = 0;

const quoteContainer = document.getElementById('quote-container');

function display() {
    quoteContainer.textContent = quotes[index];
    quoteContainer.style.backgroundColor = colors[index];
    
    
    index = (index + 1) % quotes.length;
}

display();
setInterval(display, 1000);