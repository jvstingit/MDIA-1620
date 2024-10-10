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
