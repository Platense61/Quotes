const quotes = [
  "The only difference between a problem and a solution is that people understand the solution.",
  "The world is moving so fast these days that the man who says it can't be done is generally interrupted by someone doing it",
  "The measure of success is not how much time you spend doing what you love, it's how little time you spend doing what you hate",
  "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination",
  "Everybody should learn to program a computer, because it teaches you how to think.",
  "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  "Life is made of ever so many partings welded together.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",


];

const author = [
  "Charles F. Kettering",
  "Harry Emerson Fosdick",
  "Casey Neistat",
  "Albert Einstein",
  "Steve Jobs",
  "Jack Handey",
  "Doctor Seuss",
  "Charles Dickens",
  "Thomas A. Edison"
]

//This function will be used to change the quote at random upon every click of the button
function generateQuote(){
  var num = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[num];
  document.getElementById("author").innerHTML = author[num];
  changeHex();
}

//list of all valid hex values that can be used
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

//will change the color of the background
function changeHex() {
  //initialize first character of hex color code
  let hex1 = '#';
  let hex2 = '#';

  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex1 += hexValues[index];
  }

  for(let x = 0; x < 6; x++){
    const index = Math.floor(Math.random() * hexValues.length)
    hex2 += hexValues[index];
  }

  document.body.style.background = "linear-gradient("+hex1+ ", "+ hex2 + ")";                 //change background gradient color to randomly generated hex1
  var elem = document.getElementById('change');
  elem.style.background = "linear-gradient("+hex1+ ", "+ hex2 + ")";
}


document.getElementById("change").addEventListener("click", generateQuote, true);
