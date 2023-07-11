let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
const showInfo = () => {
  moreInfo.style.display = "block";
}

readMore.addEventListener("click", showInfo)


////////////////////////////////////////////////////////////

let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = "none"
  text.innerHTML = event.timeStamp
}

share.onclick = sharePhoto


////////////////////////////////////////

// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor
}

button.onclick = colorChange;
mysteryButton.onwheel = colorChange;
// also mousedown, mouseup, mouseover, mouseout