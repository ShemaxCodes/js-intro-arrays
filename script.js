
const friend1 = "Paris";
const friend2 = "Meghan";
const friend3 = "Toni";

const friends  = ["Paris", "Meghan", "Toni"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
// returns Paris
console.log(friends.length);
console.log(friends.length-1);
console.log(friends[friends.length-1]);
//returns the last element in the array, which is "Toni"

friends[2] = "Toa";
console.log(friends);


const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);


// EXERCISE

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);