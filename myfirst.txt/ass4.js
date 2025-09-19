const inventory = []

function addItem(id, name, price, quantity){
    const newAdded = {id: id, name:name, price:price, quantity:quantity}
     inventory.push(newAdded)
     console.log(inventory)
}

addItem("new", "sow", 20, "keep")
addItem("bag", "set", 10, "sold")
addItem("bug", "sit", 40, "sell")
function removeItem(id, name, price, quantity){
    const remove = {id: id, name:name, price:price, quantity:quantity}
     inventory.pop(remove)
     console.log(inventory)
}
removeItem("new", "sow", 20, "keep")
  

function updateItem(id, name, price, quantity){
    const update = {id: id, name:name, price:price, quantity:quantity}
const index = inventory.findIndex(inventory => inventory.name === "set")
if(index ==1){
     inventory[index].id = update    // or  .splice() to update
    // inventory.splice(1,0, update)
    console.log(inventory)
}
}


updateItem("rice", "deli", 20, "white")


// const user = ["see", "nose", "mark"]
// user.splice(1,1,"self")
// console.log(user)

// function generateReport(){

// }


let users = [
   {name: "Anna", age: 25 },
   {name: "Mike", age: 30 },
   {name: "Sarah", age: 28} 
]

function generateReport(userArray) {
let report = "User Report:" 
  
  userArray.forEach((user, index) => {
    report += `  ${index + 1}.  Name: user.name, Age:${user.age}`
  });

  // alert(report); 
    console.log(report)
}

generateReport(users);

function generateItem(inventory){
    let report = "inventory report:"
    inventory.forEach((inventory, index) => {
        report += ` ${index +1}. inventory.id:new, inventory.name, price:price, quantity:quantity`
        console.log(report)
    })
}
generateItem(inventory)