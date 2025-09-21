const inventory = []
lowStock = false
function addItem(id, name, price, quantity){
    const newAdded = {id: id, name:name, price:price, quantity:quantity}
     inventory.push(newAdded)
     console.log(inventory)
}

addItem("bag", "jack", "#20", 10)
addItem("bag", "mark", "#30", 15)
addItem("bug", "ann", "#40", 30)
addItem("shoe", "mia", "#50", 5)

function removeItem(id, name, price, quantity){
    const remove = {id: id, name:name, price:price, quantity:quantity}
     inventory.pop(remove)
     console.log(inventory)
}
removeItem()
  
console.log(inventory)

function updateItem(id, name, price, quantity){
    const update = {id: id, name:name, price:price, quantity:quantity}
  const index = inventory.findIndex(inventory => inventory.name === "mark")
     if(index !== -1){  // we use if( == 1 or 2) to specific go to the index number otherwise index !== -1 will find it itself
     inventory[index].id = update    // or  .splice() to update
    // inventory.splice(1,0, update)
    console.log(inventory)
     }


     inventory.find(function (inventory){ 
    if(inventory.quantity < 15){
console.log("update this product")
  lowStock = true
    }
    else{
        console.log("none")
    }
})

     inventory.find(function (inventory){ 
if(inventory.name === "ann" && inventory.id ==="bug"){
    console.log("yes")
}
else{
    console.log("no")
}
     })


}


updateItem("rice", "deli", "#20", 40)

// if(inventory.name === "mark" || inventory.id ==="bag"){
//     console.log("yes")
// }


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
        report += ` ${index +1}. inventory:${inventory.id}, inventory:${inventory.name}, inventory:${inventory.price}, inventory:${inventory.quantity}`
        console.log(report)
    })
}
generateItem(inventory)

// personal lesson
const mixedArray = [
  "apple",
  42,
  true,
  "banana",
  null,
  { name: "Anna", age: 25 }, // ✅ valid object
  [1, 2, 3],
  false,
  100,
  "orange"
];
console.log(mixedArray[5].age)
mixedArray.forEach(item => {
  if (typeof item === "object" && !Array.isArray(item) && item !== null) {
    console.log("Found object:", item);
  }
});
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "string") {
    console.log("String:", mixedArray[i]);
  }
}

let count = 0;
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    count++;
  }
}
console.log("Number of numbers:", count);

for (let i = 0; i < mixedArray.length; i++) {
  if (Array.isArray(mixedArray[i])) {
    console.log("Nested array found:", mixedArray[i]);
  }
}
for (let i = 0; i < mixedArray.length; i++) {
  console.log(`${i}:`, mixedArray[i]);
}

let arr = mixedArray[6];
console.log(arr);  // Output: [1, 2, 3]
console.log(mixedArray[6][0]); 
for (let i = 0; i < mixedArray[6].length; i++) {
  console.log(mixedArray[6][i]);
}
mixedArray[6].forEach(function(num) {
  console.log(num);
});
mixedArray[6].push(4);
console.log(mixedArray[6]);