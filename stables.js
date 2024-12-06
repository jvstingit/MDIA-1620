// Welcome to my Stables File -Justin's Ranch
//*BONUS*//
//                  __/)_  *DINKY with his Lollipop*
//                 //     O`-._       
//                ////|---------'  @
//               / / /"" ""  "" ""   |


//------------------------- Seting up shop -------------------------//

let horses = [];

let visitorMessage = "Welcome to the stable weary traveller!";

let lateFee = 250;

let stallsAvailable = 3;

//------------------------- First day -------------------------//


function horseStuff (name, nickname, favTreat, age, monthlyRent, isInside, hairColor, isFast){
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.hairColor = hairColor;
    this.isFast = isFast;
    this.introduction = function () {
        return (`Hello! This horse's name is ${name}. His hair is ${hairColor}, and he is ${age} years old.`) 
    };

}
function introduction(horse){
    return ("Howdy! This young stallion's name is " + horse.name + " who also goes by " + horse.nickname + " with a fine hair colour of " + horse.hairColor + ".")
};
const jimbo = new horseStuff ("Jimbo", "Jim", "zyns", 12, 350, true, "black", true);
const shaq = new horseStuff ("Shaq", "Shaquille", "donuts", 10, 330, false, "dark brown", false);
const santa = new horseStuff ("Santa", "Sinter", "milk", 35, 12, true, "white", true);

console.log(introduction(shaq));







horses.push(jimbo, shaq, santa);


const newHorse = {
    name: "Dinky",
    nickname: "Dink",
    favTreat: "lollipop",
    age: 21,
    monthlyRent: 400,
    isInside: true,
    hairColor: "pink", 
    isFast: false,
};

horses.push(newHorse);
console.log (horses);

const newQuirk = {
   isHungry: true
};


console.log(newQuirk.isHungry);
 function horseHunger(){
 jimbo.isHungry = true;
 shaq.isHungry = true;
 santa.isHungry = true;
 newHorse.isHungry = true;
 };
 console.log(horses.horseHunger);


//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.
//const jimbo = new horseStuff ("Jimbo", "Jim", "zyns", 12, 350, true, "black", true);
//const shaq = new horseStuff ("Shaq", "Shaquille", "donuts", 10, 330, false, "dark brown", false);
//const santa = new horseStuff ("Santa", "Sinter", "milk", 35, 0, "white", true);
//const newHorse = {
//    name: "Dinky",
//    nickname: "Dink",
//    favTreat: "lollipop",
//    age: 21,
//    monthlyRent: 400,
//    isInside: true,
//    hairColor: "pink", 
//    isFast: false,
//};
//jimbo.isHungry = true;
//shaq.isHungry = true;
//santa.isHungry = true;
//newHorse.isHungry = true;
//---------------------- Growing business ----------------------//



stallsAvailable = 8;
let stablesLeft = (stallsAvailable - horses.length);
console.log(stablesLeft);


if (stablesLeft < 2)
    console.log("We need to build more stalls"); 
else 
    console.log(`We have ${stablesLeft} available !`);
    


function rentOwed(horseTenant){
    let totalOwed = horseTenant.monthlyRent + lateFee
        console.log(`If Mister ${horseTenant.name} is late, he will owe ${totalOwed} .`) 
}
rentOwed(santa);
//seperated the index word to make it clear
function SnackCheck(){
    for (let treat of horses){
        let i = 0;
    if (i === horses.length){
            break;
    }else if (treat.favTreat != "lollipop"){
        console.log(`${treat.name} detests lollipops!`)
        i++
    }else if (treat.favTreat === "lollipop"){
        console.log(`${treat.name} is fond of lollipops!`)
        i++
        }
    }}
SnackCheck();
console.log(horses);

function returnAlias(otherName){
    return otherName.nickname;
}
console.log (`Shaq's nickname is ${returnAlias(shaq)}`);

//------------------------- Day to day operations -------------------------//


function HairCheck(){
for (let hair of horses){
    let i = 0; 
    if (i === horses.length) {
        break;
    }else if (hair.hairColor === "black"){
        console.log(`${hair.name} has black hair`)
        i++
    }else{
        i++
    }
}}

function moveHorseOutside(outsideHorse){
if (outsideHorse.isInside === true){
    outsideHorse.isInside = false;
    console.log(`${outsideHorse.name} is now outside to spend more time in the sun!`);
}}
moveHorseOutside(horses);



