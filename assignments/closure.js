// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const createHTMLElementFactory = function(elem) {
  return function(text) {
    const htmlElem = document.createElement(elem);
    htmlElem.textContent = text; // undefined if not set with arg is the desired behavior
    return htmlElem;
  };
}

// example usage
const h1 = createHTMLElementFactory('h1');
const pageHeader = h1('Welcome to my page');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counterVar = 0;
  return function() {
    return ++counterVar; // append increment operator so it increments then returns
  }
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let i = 1;
  return Object.assign({
    increment: () => ++i,
    decrement: () => --i,
  })
};
