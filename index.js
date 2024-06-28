const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    callback();
    return function namedFunction() {
        //Function body
     };
}

function returnsANamedFunction() {
    //Define a named function
    function namedFunction() {
        console.log("I am a named function");
        //More functionality can be added here
    }
    return namedFunction; 
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log("I am an anonymous function");
    };
}

//export functions
exports = {
    receivesAFunction,
    returnsAnAnonymousFunction,
    returnsANamedFunction
};
