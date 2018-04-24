// Instantiate Awesomplete
const input = document.querySelector("#query");
let currentRadioButton = "";

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

const awesomplete = function(list) {
  new Awesomplete(input, {
    list,
    minChars: 1
  });
};

let myList = list.map(function(item) {
  return item.code + " " + item.commune;
});

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
