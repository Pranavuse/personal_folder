console.log("hello");

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = fetch(url);
getQuote.then((value1)=>{
    return value1.json();
}).then((value2)=>{
    quote.innerHTML = value2.content;
    author.innerHTML = value2.author;
})
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

