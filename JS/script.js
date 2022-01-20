const quotes = [
  "The only difference between a problem and a solution is that people understand the solution.",
  "The world is moving so fast these days that the man who says it can't be done is generally interrupted by someone doing it",
  "The measure of success is not how much time you spend doing what you love, it's how little time you spend doing what you hate",
  "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination",
  "Everybody should learn to program a computer, because it teaches you how to think.",

];

const author = [
  "Charles F. Kettering",
  "Harry Emerson Fosdick",
  "Casey Neistat",
  "Albert Einstein",
  "Steve Jobs"
]

//This function will be used to change the quote at random upon every click of the button
function generateQuote(){
  var num = Math.floor(Math.random() * quotes.length);
  console.log(num);
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
  console.log(hex1);
  console.log(hex2);

  document.body.style.background = "linear-gradient("+hex1+ ", "+ hex2 + ")";
}


document.getElementById("change").addEventListener("click", generateQuote, true);
