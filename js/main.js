"use strict";

// Instantiate Awesomplete
var input = document.querySelector("#query");
var currentRadioButton = function currentRadioButton() {
  var radioButtons = document.querySelectorAll('input[name="query-type"]');
  console.log();
};

var list = [{
  code: 1000,
  commune: "Bruxelles",
  candidats: ["Olivier", "Wouter"]
}, {
  code: 1050,
  commune: "Ixelles",
  candidats: ["Gilles", "Christophe"]
}, {
  code: 3000,
  commune: "Leuven",
  candidats: ["Etienne", "Sandro"]
}];

// Awesomplete function that creates the Awesomplete object
var awesomplete = function awesomplete(list) {
  new Awesomplete(input, {
    list: list,
    minChars: 1
  });
};

var myList = list.map(function (item) {
  return item.code + " " + item.commune;
});
awesomplete(myList);

// Try to create a list based on the input value
document.querySelector("#query-group").addEventListener("change", function (e) {
  currentRadioButton = e.target.id;
  input.value = "";
  if (currentRadioButton === "query-candidat") {
    myList = list.map(function (item) {
      return item.candidats;
    });
    myList = myList.reduce(function (a, b) {
      return a + "," + b;
    });
    awesomplete(myList);
  } else {
    myList = list.map(function (item) {
      return item.code + " " + item.commune;
    });
    awesomplete(myList);
  }
  console.log(myList);
});

// Do something when selecting an option from the autocomplete dropdown
input.addEventListener("awesomplete-select", function (e) {
  console.log(e);
});

// Rotate city names
var communes = ["Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Ville de Bruxelles", "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette", "Koekelberg", "Molenbeek-Saint-Jean", "Saint-Gilles", "Saint-Josse-ten-Noode", "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre"];
var rwContainer = document.querySelector("#rw");

var createCommunes = function createCommunes(array) {
  var randomIndex1 = Math.floor(Math.random() * communes.length);
  var randomIndex2 = Math.floor(Math.random() * communes.length);
  var rwElement1 = document.createElement("span");
  var rwElement2 = document.createElement("span");

  rwElement1.textContent = communes[randomIndex1];
  rwElement1.classList.add("rotate-word__word");
  rwElement2.textContent = communes[randomIndex2];
  rwElement2.classList.add("rotate-word__word");

  rwContainer.appendChild(rwElement1);

  setTimeout(function () {
    rwContainer.insertBefore(rwElement2, document.querySelector("span"));
  }, 1500);

  rwContainer.removeChild(document.querySelector("#rw .rotate-word__word"));

  setTimeout(function () {
    rwContainer.removeChild(document.querySelector("#rw .rotate-word__word"));
  }, 1500);
};

createCommunes(communes);
var rotateCommunes = setInterval(function () {
  console.log("tick");
  createCommunes(communes);
}, 3000);