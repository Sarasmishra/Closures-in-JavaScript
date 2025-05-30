function createCounter(){
    let count = 0

    let increment = function (){
        count+=1
        return count
    }
    let getCount  = function (){
        return count

    }

    return {increment,getCount}
}

const counter = createCounter()

console.log(counter.increment()); // Output: 1;

console.log(counter.increment()); // Output: 2;

console.log(counter.getCount()); // Output: 2;