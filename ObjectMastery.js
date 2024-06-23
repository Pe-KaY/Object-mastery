// Object Creation Basics:
// • Task: Create an object representing a superhero with properties like name,
// secretIdentity, powers (an array), and weakness.

const samson = {
  name: "Israels Superhero",
  secretIdentity: "Samson",
  powers: [
    "Super-Endurance",
    "super-speed",
    "Super-punch",
    "superhuman-strength",
  ],
  weakness: "loosing his hair",
}

// Methods and Functionality:
// • Task: Add methods to the superhero object:
// o usePower(powerName): Logs a message about the hero using a
// specific power.
// o revealIdentity(): Logs the hero’s secret identity

samson.usePower = function (powerName) {
  console.log(`${this.name} used his ${powerName}`)
}

samson.revealIdentity = function () {
  console.log(`Secret identity is: ${this.secretIdentity}`)
}
// example usage
console.log(samson.usePower("superhuman-strength"))
console.log(samson.revealIdentity())

// Task: Create a Superhero constructor function to streamline the creation of
// multiple superheroes.

function Superhero(name, secretIdentity, weakness, ...powers) {
  this.name = name
  this.secretIdentity = secretIdentity
  this.weakness = weakness
  this.powers = [...powers]
}

// Prototypal Inheritance:
// • Task: Extend the functionality of your superheroes using prototypal inheritance.
Superhero.prototype.intro = function () {
  console.log(`My name is ${this.name} and i am a superhero`)
}

// usage
let spiderman = new Superhero(
  "spiderman",
  "peter-parker",
  "water",
  "web-swing",
  "fast",
  "speed",
  "spider-senses"
)
let superman = new Superhero(
  "superman",
  "clark",
  "kryptonite",
  "x-ray vision",
  "heat-vision",
  "super-speed",
  "enhanced hearing"
)
let joker = new Superhero(
  "The Joker",
  "Jack Oswald",
  "his ego",
  "razor-tipped playing cards",
  "deadly joy buzzers",
  "acid-spraying lapel flowers"
)

// outputs
console.log(spiderman)
console.log(superman)
console.log(joker)

// using prototype inheritance
spiderman.intro()
superman.intro()
joker.intro()

// Object Iteration and Transformation:
// • Task: Use forEach, map, or filter to manipulate an array of superheroes and
// supervillains

const superheroes = [
  { name: "joker", isSuperVillian: true },
  { name: "batman", isSuperVillian: false },
  { name: "superman", isSuperVillian: false },
  { name: "wonderwoman", isSuperVillian: false },
  { name: "darkside", isSuperVillian: true },
  { name: "captain-America", isSuperVillian: false },
  { name: "poison-Ivy", isSuperVillian: true },
  { name: "electro", isSuperVillian: true },
  { name: "doctor-strange", isSuperVillian: false },
  { name: "green-goblin", isSuperVillian: true },
]

// filtering supervillains
console.log(superheroes.filter(({ isSuperVillian }) => isSuperVillian))
// filtering superheroes
console.log(superheroes.filter(({ isSuperVillian }) => !isSuperVillian))
