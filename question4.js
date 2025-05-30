function createFunctionList() {

let functions = [];


//  use let instead of var because
// var is a function scoped ,There is only one shared i across all iterations of the loop.
//  let is the block scoped.For each iteration, a new i is created in its own block scope.

for (let i = 0; i < 5; i++) {
    functions.push(function () {
        console.log("Index:", i);
    });
}

return functions; }

const functionList = createFunctionList();

functionList[0]();    // Expected Output: "Index: 0", Actual Output: "Index: 5"

functionList[1]();   // Expected Output: "Index: 1", Actual Output: "Index: 5"

functionList[2]();   // Expected Output: "Index: 2", Actual Output: "Index: 5"

functionList[3]();   // Expected Output: "Index: 3", Actual Output: "Index: 5"

functionList[4]();   // Expected Output: "Index: 4", Actual Output: "Index: 5"