  const dinos = [
    {
      species: "Triceratops",
      weight: 13000,
      height: 114, 
      diet: "herbivore",
      where: "North America",
      when: "Late Cretaceous",
      fact: "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
      species: "Tyrannosaurus Rex",
      weight: 11905,
      height: 144,
      diet: "carnivore",
      where: "North America",
      when: "Late Cretaceous",
      fact: "The largest known skull measures in at 5 feet long."
    },
    {
      species: "Anklyosaurus",
      weight: 10500,
      height: 55,
      diet: "herbivore",
      where: "North America",
      when: "Late Cretaceous",
      fact: "Anklyosaurus survived for approximately 135 million years."
    },
    {
      species: "Brachiosaurus",
      weight: 70000,
      height: "372",
      diet: "herbivore",
      where: "North America",
      when: "Late Jurasic",
      fact: "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
      species: "Stegosaurus",
      weight: 11600,
      height: 79,
      diet: "herbivore",
      where: "North America, Europe, Asia",
      when: "Late Jurasic to Early Cretaceous",
      fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
      species: "Elasmosaurus",
      weight: 16000,
      height: 59,
      diet: "carnivore",
      where: "North America",
      when: "Late Cretaceous",
      fact: "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
      species: "Pteranodon",
      weight: 44,
      height: 20,
      diet: "carnivore",
      where: "North America",
      when: "Late Cretaceous",
      fact: "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
      species: "Pigeon",
      weight: 0.5,
      height: 9,
      diet: "herbivore",
      where: "World Wide",
      when: "Holocene",
      fact: "All birds are living dinosaurs."
    }
  ];
  
  // dinos.forEach(item, function dino(){
  //   return dinos;
  // });
  // console.log(dino())

  dinos.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});

//}

// Create Dino Objects
/*function DinoConstructor() {
  this.species = species.dinoInfo,
    this.diet = diet.dinoInfo,
    this.where = where.dinoInfo,
    this.when = when.dinoInfo,
    this.fact = fact.dinoInfo
}


// Create Human Object
function humanDataForm() {
  let name, height, weight, diet;
  const feet = document.querySelector('#feet').value;
  const inches = document.querySelector('#inches').value;
  height = (feet * 12) + inches;
  let humanData = {
    name: document.querySelector('#name').Value,
    height: height,
    weight: document.querySelector('#weight').value,
    diet: document.querySelector('#diet').value
  }
  return humanData;
}

const myForm = document.querySelector("#dino-compare");
myForm.addEventListener('submit', humanDataForm());
*/
// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen
// const btn = document.querySelector("#btn");
// const humanEntry = document.querySelector("#dino-compare");
// const grid = document.querySelector("#grid");

// btn.addEventListener("click", function () {
//   humanEntry.style.display = "none";
  // grid.style.display = "flex";
// });

// On button click, prepare and display infographic