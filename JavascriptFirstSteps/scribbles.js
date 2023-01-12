// Random file for notes and sample exercises

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"},
]


// Map and Filter Exercise
// From the spices array use map and filter to:
// - create a new array `names` with only the name of each girl
const names = spices.map(spice => spice.name);
// - create a new array `endInY` with just the girls whose nickname ends in "y"
const endInY = spices.filter(spice => spice.nickname.charAt(spice.nickname.length - 1) === "y")