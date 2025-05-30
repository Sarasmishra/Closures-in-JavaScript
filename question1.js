function outerFunction(){
    let message= "Inside the function"
    console.log(message)
    function innerFunction(){
        console.log(message,2)
    }
    return innerFunction  // Return inner function
}

const myClosures = outerFunction()  // outerFunction finishes, and get inner function in return
myClosures()   //innerFunction got called