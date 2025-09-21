function game(name) {
    console.log("GAME:", name)
  const player1 = prompt("Player 1: Choose your items:");
  const player2 = prompt("Player 2: Choose your items:");

  if (player1 == player2) {
    return "TIE";
  } else if (
    (player1 == "rock" && player2 == "scissors") ||
    (player1 == "scissors" && player2 == "paper") ||
    (player1 == "paper" && player2 == "rock")
  ) {
    return "PLAYER1";
  } else {
    return "PLAYER2";
  }
}


const result1 = game("Round 1");
console.log(result1)
const result2 = game("Round 2");
console.log(result2)
const result3 = game("Final");
console.log(result3)

function greet(name, age, sex){
    console.log("hello", name, sex, age)
}

greet("funmi male 15")
greet("dorcas")



const baskets = [
  { name: "Basket 1", hasFruit: false },
  { name: "Basket 2", hasFruit: true },
  { name: "Basket 3", hasFruit: false }
];
 
 
function checkBasket(basketNumber){
   for( let i = 0; i < baskets.length; i++){
    if(baskets[i].hasFruit === false){
               console.log("yes")

    }else{
        console.log("no")
    }
}
}
checkBasket()



//   let fruit = ["apple", "orange", "apple", "apple", "orange"]
// function sortFruit() {
//   for( let i = 0; i < fruit.length; i++){
// if (fruit[2]=== "orange"){
//     console.log("yes")
// } else if ( fruit[i] === "orange") {
//     console.log("no")
// }
//   }
// }
// sortFruit()


 let randomNumber = Math.random() 
console.log(randomNumber)

let randomNumbe = Math.random() * 6
console.log(randomNumbe)

let flooredNumber = Math.floor(5.43555)
console.log(flooredNumber)

let randoNumber = Math.floor( Math.random() * 7) + 2
console.log(randoNumber)

function rollDice(){
  let randomNumber = Math.floor( Math.random() * 7) + 2
  return randomNumber
}
console.log(rollDice())