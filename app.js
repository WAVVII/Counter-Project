
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