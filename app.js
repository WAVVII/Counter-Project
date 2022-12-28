


// guesser function 

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