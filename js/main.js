// Instantiate Awesomplete
const input = document.querySelector("#query");
let currentRadioButton = function() {
  const radioButtons = document.querySelectorAll('input[name="query-type"]');
  console.log();
};

const list = [
  {
    code: 1000,
    commune: "Bruxelles",
    candidats: ["Olivier", "Wouter"]
  },
  {
    code: 1050,
    commune: "Ixelles",
    candidats: ["Gilles", "Christophe"]
  },
  {
    code: 3000,
    commune: "Leuven",
    candidats: ["Etienne", "Sandro"]
  }
];

// Awesomplete function that creates the Awesomplete object
const awesomplete = function(list) {
  new Awesomplete(input, {
    list,
    minChars: 1
  });
};

let myList = list.map(function(item) {
  return item.code + " " + item.commune;
});
awesomplete(myList);

// Try to create a list based on the input value
document.querySelector("#query-group").addEventListener("change", function(e) {
  currentRadioButton = e.target.id;
  input.value = "";
  if (currentRadioButton === "query-candidat") {
    myList = list.map(function(item) {
      return item.candidats;
    });
    myList = myList.reduce(function(a, b) {
      return a + "," + b;
    });
    awesomplete(myList);
  } else {
    myList = list.map(function(item) {
      return item.code + " " + item.commune;
    });
    awesomplete(myList);
  }
  console.log(myList);
});

// Do something when selecting an option from the autocomplete dropdown
input.addEventListener("awesomplete-select", function(e) {
  console.log(e);
});

// Rotate city names
const communes = [
  `Anderlecht`,
  `Auderghem`,
  `Berchem-Sainte-Agathe`,
  `Ville de Bruxelles`,
  `Etterbeek`,
  `Evere`,
  `Forest`,
  `Ganshoren`,
  `Ixelles`,
  `Jette`,
  `Koekelberg`,
  `Molenbeek-Saint-Jean`,
  `Saint-Gilles`,
  `Saint-Josse-ten-Noode`,
  `Schaerbeek`,
  `Uccle`,
  `Watermael-Boitsfort`,
  `Woluwe-Saint-Lambert`,
  `Woluwe-Saint-Pierre`
];
const rwContainer = document.querySelector("#rw");
const userLocation = Navigator.geolocation;

const createCommunes = function(array) {
  let randomIndex = Math.floor(Math.random() * communes.length);
  const rwElement = document.createElement("span");
  rwElement.textContent = communes[randomIndex];
  rwElement.classList.add("rotate-word__word");
  rwContainer.replaceChild(rwElement, document.querySelector("#rw > span"));
};

createCommunes(communes);
const rotateCommunes = setInterval(function() {
  createCommunes(communes);
}, 3000);
