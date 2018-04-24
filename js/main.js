// Instantiate Awesomplete
const input = document.querySelector("input");
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
const myList = list.map(function(item) {});

new Awesomplete(input, {
  list: myList,
  minChars: 1,
  replace: function(text) {
    this.input.value = text + " tadaa";
  }
});

input.addEventListener("awesomplete-select", function() {
  console.log("submitted!");
});
