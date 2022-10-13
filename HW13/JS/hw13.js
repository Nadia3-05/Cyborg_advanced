// Variables Planets
const ctnPlanets = document.getElementById("ctn-main");
const planetsPrevious = document.getElementById("planets-previous");
const planetsNext = document.getElementById("planets-next");

let URL_Planets = "https://swapi.dev/api/planets/";
let nextPlanets;
let previousPlanets;

planetsPrevious.addEventListener("click", pagePreviousPlanets);
planetsNext.addEventListener("click", pageNextPlanets);

// Functions Planets
async function fetchPlanets() {
  document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Planets);
  const data = await results.json();
  nextPlanets = data.next;
  previousPlanets = data.previous;
  let planets = data.results;
  let outPut = ' ';
  document.querySelector('.overlay').classList.remove('active');
  planets.forEach(item => {
    outPut += `<div class="card card-planet">
      <h2>${item.name}</h2>
      <h5>Climate: ${item.climate}</h5>
      <h5>Terrain: ${item.terrain}</h5>
      <h5>Population: ${item.population}</h5>
    </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextPlanets() {
  if(nextPlanets) {
    URL_Planets = new URL(nextPlanets);
  }
  fetchPlanets()
    .then(res => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousPlanets() {
  if(previousPlanets) {
    URL_Planets = new URL(previousPlanets);
  }
  fetchPlanets()
    .then(res => { 
    console.log(`Success: Planets`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

// Variables People
const peoplePrevious = document.getElementById("people-previous");
const peopleNext = document.getElementById("people-next");

let URL_People = "https://swapi.dev/api/people/";
let nextPeople;
let previousPeople;

peoplePrevious.addEventListener("click", pagePreviousPeople);
peopleNext.addEventListener("click", pageNextPeople);

// Functions People
async function fetchPeople() {
document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_People);
  const data = await results.json();
  nextPeople = data.next;
  previousPeople = data.previous;
  let people = data.results;
  let outPut = ' ';
document.querySelector('.overlay').classList.remove('active');  
  people.forEach(item => {
    outPut += `<div class="card card-people">
      <h2>${item.name}</h2>
      <h5>Birth Year: ${item.birth_year}</h5>
      <h5>Gender: ${item.gender}</h5>
    </div>`
  })
  ctnPlanets.innerHTML = outPut;
}

function pageNextPeople() {
  if(nextPeople) {
    URL_People = new URL(nextPeople);
  }
  fetchPeople()
    .then(res => { 
    console.log(`Success: People`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}

function pagePreviousPeople() {
  if(previousPeople) {
    URL_People = new URL(previousPeople);
  }
  fetchPeople()
    .then(res => { 
    console.log(`Success: People`);
  })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
  });
}
