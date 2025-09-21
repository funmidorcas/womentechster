const bankAccount = []; 
 const addBankAccount = (name, balance) => {
       const account = { name: name, balance: balance }; // local variable (local scope)   
       bankAccount.push(account); // global variable // global scope 
       };
        function bankTransfer(sender, receiver, amount) { 
              const senderAccount = bankAccount.find(function (account) {
                     if (account.name === sender) {   
          return true;  
                           }  
                              return false; 
                              }); 
             const receiverAccount = bankAccount.find(function (account) { 
                                    if (account.name === receiver) {    
                  return true;  
                                           }   
                     return false; 
                      }); 
                        console.log("Sender Account", senderAccount)  
                           console.log("Receiver Account", receiverAccount) }
                          console.log(bankAccount.length, "before adding");
                    addBankAccount("Mike", 202); 
                                                   addBankAccount("Luke", 202);
                       addBankAccount("Princess", 100000);
                                                     console.log(bankAccount.length, "after adding");
                      console.log(bankAccount, "view");
            bankTransfer("Mike", "Lukes", 100);
                                                       
                                                       
                                                      
        // Q1. Implement a simple add to cart feature. // Q2. Implement a simple todo items list


        const activities  = []        
       isDone = true

 function exercise(name){
    activities.push("play")
    console.log(activities)
    if(isDone  === true){
        activities.push("jog")
        console.log(activities)
  activities.find(function (activities){     // .find() method here
   console.log(activities.startsWith("j"))
 })
 if(isDone === true){activities.push("run")
 console.log(activities)

if (activities.includes("play") && activities.includes("jog")) {
  activities.push("sleep");
} else {
  console.log("no sleeping");
}

}
 
 else{
    console.log("cant proceed run")
 }
   }else{
        console.log("stages cannot be unlock play")
    }
console.log(activities)
 }
 exercise("mike")

 
//  exercise("john")




// const todo = [];
// function addTodo (task, time) {
//     const newThingsToDo = {taskType: task, taskTime: time};
//     todo.push(newThingsToDo);
//     console.log(todo);
// }
// addTodo("code", "2hrs");
// addTodo("read", "4hrs");
// addTodo("eating", "3hrs");
// addTodo("sleep", "5hrs");


// //implement a simple add to cart feature

// const cart = [];

// function addToCart (item, price) {
//     const newItem  = {itemName: item, itemPrice: price};
//     cart.push(newItem);
//     console.log(cart);
// }

// addToCart ("Shoe", 2000);
// addToCart ("handbag", 2000);
// addToCart ("cap", 2000);


// let pay = "me"
// console.log(pay)


let todo = [];
function addTodo (task, time) {
  const addedTask = {taskName: task, taskTime: time};
  todo.push(addedTask);
  console.log(todo);
  
}
addTodo ("coding",3);