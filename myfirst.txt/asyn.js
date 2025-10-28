const mywork = new Promise(function(resolve, reject) {
    const successful = false
    setTimeout(function(){
        if(successful){
            resolve(`this is good`)
        }
        else{
            reject(`not so`)
        }
    }, 3000)
 displayPromise.then(function (data) {
    console.log(data)
 })
displayPromise.catch(function(err){
    console.log(err, "from catch")
})

    // let num = 2 + 3;

    // if(num === 5){
    //     resolve(num);   // success
    //  } 
    // // else {
    // //     reject("Something went wrong"); // failure
    // // }
});

console.log(mywork);