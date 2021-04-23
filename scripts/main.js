function getQuote() {
    fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
    .then(response => response.json())
    .then(data => updateQuote(data.sentence));
}

function updateQuote(text) {
    let h1 = document.querySelector("h1");
    h1.textContent = text;
}

console.log("hi");
getQuote();