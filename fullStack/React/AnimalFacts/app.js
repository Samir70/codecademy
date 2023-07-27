import { animals } from './animals';
import { React } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById("app");
const root = createRoot(container)
const title = ""
const showBackground = true;
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />

function displayFact(e) {
  let animalName = e.target.alt;
  let fact = animals[animalName].facts[Math.floor(Math.random() * 3)]
  document.getElementById("fact").innerHTML = fact
}
const images = []
for (let animal in animals) {
  images.push(<img
    key={animal}
    className="animal"
    alt={animal}
    src={animals[animal].image}
    area-label={animal}
    role="button"
    onClick="displayFact"
  />)
}


const animalFacts = (
  <div>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id="fact"></p>
    <h1>{title || "Click an animal for a fun fact"}</h1>
  </div>
)
root.render(animalFacts)