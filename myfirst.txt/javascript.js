const name = prompt("what is your name")
console.log(name)

let myName = prompt("what is your job title")
console.log(myName)

let mark = confirm("seen")
console.log(mark)
let toss = alert("how far")
console.log(toss)

let num1 =5
let num2 = 4
let namee = "funmi"
let result = num1 + num2
alert(result)
 alert(num1 - num2)
 alert(num1 / num2)
 alert(num1 * num2)
 let message =  "Hello" + " " + namee + " " + result
 console.log(message)

const buyer = {   name: "Mki Hanks", 
      balance: 200000,  
       balanceCurrency: "USD", 
         isAccountBlocked: false,
         }; 
         const seller = {   name: "Emmanuel Daniel", 
              balance: 1000000, 
                balanceCurrency: "USD", 
                isAccountBlocked: false, 
            };
             let item = {   name: "Apple", 
                  quantity: 50, 
                    pricePerItem: 20, 
                      currency: "USD",
                     }; 
                     const cart = { 
                            price: 0
                         }
                          cart.price = item.pricePerItem * 4 
                           item.pricePerItem * 4
                            item.quantity = item.quantity - 4
                             console.log(cart, item);
                              buyer.balance = buyer.balance - cart.price; 
                              seller.balance += cart.price
                               console.log(buyer, 'buyer');
                                console.log(seller, 'seller');  

                                

const numberOfItems = 501
 const isEnoughItems = item.quantity >= numberOfItems
  console.log('isEnoughItems', isEnoughItems)
   const isGreaterItems = item.quantity > numberOfItems
    console.log('isGreaterItems', isGreaterItems)
     const isLessItems = item.quantity < numberOfItems 
     console.log('isLessItems', isLessItems)
      const isExactSize = item.quantity == numberOfItems 
       console.log('isExactSize', isExactSize);
        const isNotExactSize = item.quantity != numberOfItems 
         console.log('isNotExactSize', isNotExactSize)  



                                if(numberOfItems > 1){
    console.log("I am greater equal 1")
}
if (numberOfItems < 1){
    console.log('I am less than 1')
}

let monthlyIncome = 2000000
let dailyExpenses =  203023
let monthlyExpenses = 3543545
let savings = 324342
let spendings = 232323

console.log(monthlyIncome - dailyExpenses)
console.log(monthlyIncome - savings)


 const customer1 = {
    name : "funmi", 
    balance : 20000, 
     currency : "USD",
     type: "savings"
 }
 const customer2 = {
    name : "Dorcas", 
    balance : 10000, 
     currency : "NGN",
     type: "current"
 }
 const customer3 = {
    name : "john", 
    balance : 50000, 
     currency : "USD",
     type: "savings"
 }

const customer4 ={
    name : "ade",
    balance : 30000,
    currency: "EUR",
    type: "savings"

}


 const add = { 
                            price: 50
                         }
                         const deposit = {
                            price : 100
                         }

customer1.balance += 50000

console.log(customer1.balance)
customer2.balance -= 20000
console.log(customer2.balance)



                              customer2.balance = customer2.balance - add.price; 
                              customer1.balance += add.price
                               console.log(customer1, 'customer1');
                                console.log(customer2, 'customer2');  

                                customer4.balance += deposit.price
                                console.log(customer4.balance) 
const withdraw = 20000
const isEnough = customer1.balance < withdraw


if (isEnough){
    console.log('insufficient balance')
}

else{
    console.log('sufficient balance')

}
console.log(customer1.balance)
let withdrawer1 = customer1.balance - withdraw
if(customer1.balance >= withdraw ){
    console.log("successful")
}
else if(customer1.balance <= withdraw ){
    console.log("unsuccseful")
}

if(customer2.balance >= withdraw ){
    console.log("successful")
}
else if(customer2.balance <= withdraw ){
    console.log(`withdraw denied for ${customer2.name}: insufficient funds`)
}

if( customer1.currency === customer3.currency ){
    customer1.balance += customer2.balance
    console.log("success")
} 
 if (customer1.currency !== customer2.currency){
    customer1.balance += customer2.balance
    console.log(`now match: success`)
}


if( customer1.type === "current"){
    console.log("no no")
} else if(customer1.type === "savings" ){
    let newCustomer1 = customer1.balance + 0.02* customer1.balance
    console.log(newCustomer1) 
    console.log("good to go")
}
if( customer2.type === "current"){
    console.log("good to go")
} else if(customer1.type === "savings" ){
    let newCustomer2 = customer2.balance + 0.02* customer2.balance
    console.log(newCustomer1) 
    console.log("no no")
}

if (customer1.balance >= customer2.balance){
    if(customer1.balance >= customer3.balance){
        console.log("customer1 balanance is the highest")
    }else {
        console.log("not the highest")
    }
}
if (customer2.balance >= customer1.balance || customer2.balance >= customer3.balance)
    // if(customer2.balance >= customer3.balance)
{   
        console.log("customer1 balanance is the highest")
    }else {
        console.log("not the highest")
    }

if (customer3.balance >= customer1.balance){
    if(customer3.balance >= customer2.balance){
        console.log("customer1 balanance is the highest")
    }else {
        console.log("not the highest")
    }
}
if (customer4.balance >= customer1.balance){
    if(customer1.balance >= customer3.balance){
        console.log("customer1 balanance is the highest")
    }else {
        console.log("not the highest")
    }
}

if(customer1.balance > 0){
    console.log("Active")
}else{
    console.log("not active")
}
if(customer2.balance === 0){
    console.log("Active")
}else{
    console.log("not active")
}
if(customer3.balance < 0){
    console.log("overdrawn")
}else{
    console.log("not active")
}
  console.log(customer1)
  console.log(customer2)
  console.log(customer3)
  console.log(customer4)


if(customer1.currency === customer3.currency){
    console.log("matched")
    customer1.balance += 1500
    console.log(customer1.balance)
}else{
    console.log("no no")
}
if(customer1.currency === customer4.currency){
    console.log("matched")
}else{
    console.log("no no")
}
if(customer1.currency === customer2.currency){
    console.log("matched")
}else{
    console.log("no no")
}







customer1.balance = customer3.balance + customer1.balance
console.log(customer1.balance) 
customer3.balance = 0
console.log(customer3.balance)
console.log(customer2.balance)
console.log(customer1, customer2, customer3)

