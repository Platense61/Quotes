# Technologies Used

1. HTML5
2. Bootstrap 5
3. CSS
4. Javascript
5. Windows10

## Implementation

This project utilizes bootstrap5 for the markup of the page. A card element availible from bootstrap5 was used to hold both the quote and button. Most importantly my javascript utilizes 2 arrays, one to hold all quotes and another array to hold all authors. Both arrays are formatted in a way where index 0 of the 1st array corresponds to its corresponding author in the second array at index 0. A function `generateQuote()` was used to generate random a random number that will be used to index both arrays. An event listener is used to catch the click event.

For my background theme of the page I used a function called
  `changeHex()`
That uses the following array
  `const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];`
which contains all the possible values for a hex color code. 2 of these color codes are generated and used to change the gradient color of the background and button. This function is called within the generateQuote() function
