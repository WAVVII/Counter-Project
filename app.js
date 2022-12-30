
//fade in out function

const fadeOutIntro = () => {
  let intro = document.querySelector('.introguess');
  let select = document.querySelector('.heroselect');
  let opacity = 1;
  const fadeInterval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      intro.style.opacity = opacity;
    } else {
      clearInterval(fadeInterval);
      intro.style.display = 'none';
      select.style.display = 'flex';
    }
  }, 20);
};

// Fade out the heroselect div and fade in the heroguess div
const fadeOutSelect = () => {
  let select = document.querySelector('.heroselect');
  let guess = document.querySelector('.heroguess');
  let opacity = 1;
  const fadeInterval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      select.style.opacity = opacity;
    } else {
      clearInterval(fadeInterval);
      select.style.display = 'none';
      guess.style.display = 'flex';
    }
  }, 20);
};

document.getElementById('fadeOutDiv').addEventListener('click', fadeOutIntro);





// Tick Animation 

const confirmButton1 = document.getElementById('confirm-button-1');
const confirmButton2 = document.getElementById('confirm-button-2');
const tickIcon1 = document.querySelector('#confirm-button-1 + .fa-solid.fa-check');
const tickIcon2 = document.querySelector('#confirm-button-2 + .fa-solid.fa-check');

confirmButton1.addEventListener('click', () => {
  tickIcon1.classList.add('animated');
  tickIcon1.style.display = 'inline-block';
  confirmButton1.style.display = 'none';
});

confirmButton2.addEventListener('click', () => {
  const endNumber = parseInt(document.getElementById('lessrange').textContent);
  const startNumber = parseInt(store.range.start);

  if (endNumber - startNumber >= 2) {
    tickIcon2.classList.add('animated');
    tickIcon2.style.display = 'inline-block';
    confirmButton2.style.display = 'none';
    startGameButton.disabled = false;
  }
});


// button adder / decreaser

let incre = document.getElementById("incr")
let decre = document.getElementById("decr")
let guess = document.getElementById("guess")

let counter = 1

function incr() {
  if (counter < 10) {
    counter++;
  }
  updateCounter();
}

function decr() {
  if (counter > 1) {
    counter--;
  }
  updateCounter();
}

function updateCounter() {
  guess.textContent = counter;
}

//selection counter for increasing

function incrFir() {
  let addrangeValue = document.getElementById('addrange').textContent;
  addrangeValue = parseInt(addrangeValue); 
  addrangeValue += 1;
  document.getElementById('addrange').textContent = addrangeValue;
}

function decrFir() {
  let lessrangeValue = document.getElementById('addrange').textContent;
  lessrangeValue = parseInt(lessrangeValue); 
  if (lessrangeValue <= 1) {
    return;
  }
  lessrangeValue -= 1;
  document.getElementById('addrange').textContent = lessrangeValue;
}

//selection counter for decreasing

function incrSec() {
  let addrangeValue = document.getElementById('lessrange').textContent;
  addrangeValue = parseInt(addrangeValue);
  addrangeValue += 1;
  document.getElementById('lessrange').textContent = addrangeValue;
}

function decrSec() {
  let lessrangeValue = document.getElementById('lessrange').textContent;
  lessrangeValue = parseInt(lessrangeValue); 
  if (lessrangeValue <= 1) {
    return;
  }
  lessrangeValue -= 1;
  document.getElementById('lessrange').textContent = lessrangeValue;
}




// Track The Start Button identity
const startGameButton = document.querySelector('.changenext button');

let confirmButton1Pressed = false;
let confirmButton2Pressed = false;

startGameButton.disabled = true;

confirmButton1.addEventListener('click', () => {
  confirmButton1.classList.add('disabled');
  confirmButton1Pressed = true;
  startGameButton.disabled = !(confirmButton1Pressed && confirmButton2Pressed);
});

confirmButton2.addEventListener('click', () => {
  const endNumber = parseInt(document.getElementById('lessrange').textContent);
  const startNumber = parseInt(store.range.start);

  if (endNumber - startNumber > 2) {
    confirmButton2.classList.add('disabled');
    confirmButton2Pressed = true;
    startGameButton.disabled = !(confirmButton1Pressed && confirmButton2Pressed);
  }
});





// Storage for the values

const store = {};


const incrFir1 = document.getElementById('incrFir');
const decrFir2 = document.getElementById('decrFir');
const incrSec3 = document.getElementById('incrSec');
const decrSec4 = document.getElementById('decrSec');

startGameButton.disabled = true;

confirmButton1.addEventListener('click', () => {
  store.range = {
    start: document.getElementById('addrange').textContent,
  };
  incrFir1.classList.add('disabled');
  decrFir2.classList.add('disabled');

  const no1 = document.getElementById('no1');
  no1.textContent = store.range.start;

  confirmButton2.disabled = false;
});

confirmButton2.addEventListener('click', (end) => {
  const endNumber = parseInt(document.getElementById('lessrange').textContent);
  const startNumber = parseInt(store.range.start);

  if (endNumber - startNumber >= 2 || startNumber > endNumber) {
    store.range = {
      ...store.range,
      end: endNumber,
    };
    incrSec3.classList.add('disabled');
    decrSec4.classList.add('disabled');

    const no2 = document.getElementById('no2');
    no2.textContent = store.range.end;

    confirmButton2Pressed = true;
    startGameButton.disabled = !confirmButton2Pressed;
  } else {
    confirmButton2.disabled = false;
    confirmButton2Pressed = false;
    startGameButton.disabled = true;
  }
});




// Num Gen 

// Generate a random number between 1 and 100
// const target = Math.floor(Math.random() * 5) + 1;

// // Set the initial number of guesses to 0
// let numGuesses = 0;

// // Prompt the user to enter their guess
// let guesses = prompt("Enter your guess:");

// // Keep looping until the user guesses the target number
// while (guesses != target) {
//   // Increment the number of guesses
//   numGuesses++;

//   // Give the user a hint based on their guess
//   if (guesses < target) {
//     alert("Your guess is too low. Try again.");
//   } else if (guesses > target) {
//     alert("Your guess is too high. Try again.");
//   }

//   // Prompt the user for their next guess
//   guesses = prompt("Enter your guess:");
// }

// // If the loop exits, the user must have guessed the target number
// alert("Congratulations, you guessed the number in " + numGuesses + " guesses!");