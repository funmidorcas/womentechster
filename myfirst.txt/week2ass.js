
 function save(){
let user = prompt("Do you want to check your balance")
 if(user === "yes"){
 let pin =    prompt("Enter your 4 digit pin")
   if(pin === "1234"){
    alert("Your available balance is #30,000")
   }else{
   let secondChance = prompt("incorrect pin, try again one more time")
  if(secondChance === "1234"){
        alert("Your available balance is #30,000")

  }else{
    alert("account blocked!")
  } }
 }
 
 
 else{

    alert("Thank You for coming!")
 }

}
save()




//  function work(){
// const userQues = [
//   num1 = "what is 2 + 2",
// num2 = "Your gender",
// num3 = " what country are you",
// num4 = "days of the week"
// ]

// const ans = [
//   opt1 = 4,
//   opt2 = "female",
//   opt3 ="nigeria",
//   opt4 ="monday"
// ]

//   let ques1 = prompt("what  2 + 2")
//  let ques2 = prompt("Your gender  (a) Female (b) Male")
//  let ques3 = prompt(" what country are you")  
//  let ques4 = prompt ("days of the week")

// for(let i = 0; i < userQues.length; i++){
//  for(let i = 0;i < ans.length; i++){
//   if(userQues[i] === ans[i]){
//     alert("correct!")
    
//   }else if (userQues[i] !== ans[i] ) {
   
//     alert("wrong")

//   }
//  }
//  }
// }
 
 
//  work()



function work() {
  const questions = [
    "What is 2 + 2?",
    "Your gender (a) Female (b) Male",
    "What country are you in?",
    "Name one day of the week"
  ];

  const correctAnswers = [
    "4",
    "female",
    "nigeria",
    "monday"
  ];

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
let response = prompt(questions[i]);


    if (response === correctAnswers[i]) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong!");
    }
  }

  alert(`Your final score is ${questions.length}  out of 5 question `);
}

work();

const calculateNew = ( ) => {
  return "2 +2"
}
window.console.log("me me")

const person = {
  name: "john mark",
  age: 32,
  isMarried: false,
  hobbies: ["reading", "travelling", "swimming"],
  greet: function(){
    console.log("hello there")
  },
  address:{
    street:"123 main st",
    city:" new york",
    country: "USA",
    getAddress: function(){
      return "123 main st, new york, usa"
    }
  }
}

console.log(person.name)
person
    // for( let i = 0; i < baskets.length; i++){
    // if(baskets[i].hasFruit === false){
