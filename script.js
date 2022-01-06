
const friend1 = "Paris";
const friend2 = "Meghan";
const friend3 = "Toni";

const friends  = ["Paris", "Meghan", "Toni"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
// returns Paris
console.log(friends.length);
console.log(friends.length-1);
console.log(friends[friends.length-1]);
//returns the last element in the array, which is "Toni"

friends[2] = "Toa";
console.log(friends);
