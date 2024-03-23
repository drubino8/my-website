// Data
const pics = ['https://sfccdesign.com/2023gradshow/wp-content/uploads/2023/05/dawson-r.png', 'https://sfccdesign.com/2023gradshow/wp-content/uploads/2023/05/dawson-r-action.png'];

// Random Number
const randNum = Math.floor(Math.random() * 2);

// Get Stuff
const randoImage = document.querySelector('img');

// Set Stuff
randoImage.src = pics[randNum];