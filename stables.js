// Lesson 3
let horseName = "Esteban";
console.log(horseName);
let horseNickname = "Mateusz";
console.log(horseName);

let horseAge = 300;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

//Lesson 4
console.log(typeof true)
console.log(typeof false)
const STABLE_MONTHLY_FEE = 5000;
console.log(STABLE_MONTHLY_FEE);
console.log(`MEOW ${STABLE_MONTHLY_FEE}`);
console.log(93.74/32);
console.log("woof" + "grrr" + "glub");
console.log("Esteban" + 64);

//LAB LESSON 4
console.log(`mi horses nombre es ${horseName}`);
console.log(`mi horses nick nombre es ${horseNickname}`);
console.log("THE MONTHLY STABLE FEE IS" + STABLE_MONTHLY_FEE);
console.log("the stables fee with a discounted 3 month stay would be " + (STABLE_MONTHLY_FEE * 3) *.1 )

//LAB 5a
if (horseName === "Esteban" && isHorseInside !== true){
    console.log(`Mr. ${horseName} is inside the stable`);}
        else{console.log(`Mr. ${horseName} is not outside`);}

//LESSON 6

//Horse = ("name", age, isInside)

//"Schlong"
//"S" is the 0
//"Schlong"
//"h" is the 3

//Names = [Esteban, Bing, Bong]
// let horseNames = [horseName, "Bing", "Bong"];
// // let horseAges = [horseAge, 4, 78];
// let horseLocations = [isHorseInside, false, true];
// console.log(horseNames.length);
// console.log(horseNames);
// horseNames.push("Donald");
// console.log(horseNames);
// console.log(horseNames.length);

// console.log(horseNames[2]);
// console.log(horseAges[2]);
// console.log(horseLocations[2]);
// console.log(`Welcome to Chiraq! There are ${horseNames.length} gangsta horses on the block rn.`);
// //console.log("Welcome to Chiraq! There are " + horseNames.length + " gangsta horses on the block rn. ");
// console.log(`Welcome to Chiraq! There are ${horseNames.length} gangsta horses on the block rn. Their names are: ${horseNames [0]}, ${horseNames [1]}, ${horseNames [2]}`);
// if(horseLocations[2]){
//     console.log(horseNames[2] + " is on the block!");
// }
// console.log(horseAges[2] + horseAges[1]);

// if(horseNames [0] === "Esteban") {
//     console.log("Wagwan Esteban!")
// }
// if(horseNames.length <5) {
//     console.log("The block is hot rn.");
// }

//LAB 6
let horseNames = [horseName, "Bing", "Bong"];
let horseOneName = "Esteban"
let horseTwoName = "Bing"
let horseThreeName = "Bong"
let horseFourName = "Donald" 
horseNames.push("Donald");
let horseAges = [horseAge, 4, 78];
horseAges.push("50");
console.log (horseNames);
console.log (horseAges);
let horseLocations = [isHorseInside, false, true, false];
console.log (horseLocations);
console.log(`Welcome to Chiraq Stables! There are ${horseNames.length} gangsta horses that terrorize the stable with their drug dealing and gambling antics: ${horseNames}. These gangsta horses are only the ages of ${horseAges} and have been working the corner since they were 2. These boys are some bad mfers.`);
if(horseLocations[0]) {
    console.log (horseNames[0] + " is inside.");
} 
if(horseLocations[1]) {
    console.log (horseNames[1] + "is inside")}
    else{console.log(horseNames[1] + " is working the corner; hustling.");}

if(horseLocations[2]) {
    console.log (horseNames[2] + " is inside.");
} 
if(horseLocations[3]) {
    console.log (horseNames[3] + "is inside")}
    else{console.log(horseNames[3] + " is working the corner; hustling.");}