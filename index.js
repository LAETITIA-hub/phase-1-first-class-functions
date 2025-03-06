// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  // Testing the functions
  
  // Test receivesAFunction
  receivesAFunction(() => console.log("Callback function was called."));
  
  // Test returnsANamedFunction
  const namedFunction = returnsANamedFunction();
  namedFunction(); // Outputs: "This is a named function."
  
  // Test returnsAnAnonymousFunction
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); // Outputs: "This is an anonymous function."
  