const gameContainer = document.getElementById("game");
let clickCount = 0; 
let firstGuess = null; 
let secondGuess = null; 
let block = document.getElementById('gameCard');

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
   // While there are elements in array
  while (counter > 0) {
    // random number
  let index = Math.floor(Math.random() * counter);
    counter--;
     //count down
    // swap last element
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
//Random color placecment 
let shuffledColors = shuffle(COLORS);
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  firstGuess = null; 
  secondGuess = null; 
  
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("skyblue");

    newDiv.addEventListener("click", function() {
     newDiv.classList.remove("skyblue");
     newDiv.classList.add(color); 
    }) 
    newDiv.addEventListener("click", handleCardClick);
    

    gameContainer.append(newDiv);
  }
}
// TODO: Implement this function!
function handleCardClick(event) {
  clickCount++;
  gameContainer.onclick = function() {
    if (clickCount === 1){
      firstGuess = event.target;
      firstGuess.setAttribute('name', 'card');
      console.log("first guess", firstGuess);
    } else if (clickCount === 2){
      secondGuess = event.target; 
      console.log("second guess", secondGuess);
      block.classList.add('block-div');
      rules();
    }
  }
};

function rules(){
    if(firstGuess.classList.value === secondGuess.classList.value && !secondGuess.hasAttribute('name')){
     
      setTimeout(function() {
        block.classList.remove('block-div');
        if (clickCount === COLORS.length) alert("game over!");
      }, 100)
    } else {
      console.log("No match!");
      setTimeout(function() {
        firstGuess.classList.add('skyblue');
        secondGuess.classList.add('skyblue');
        block.classList.remove('block-div');
      
      }, 500)

    }
    clickCount = 0;
    firstGuess.removeAttribute('name');
    
}
  




  // when the DOM loads
createDivsForColors(shuffledColors);