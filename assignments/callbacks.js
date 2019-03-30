// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/**
 * Recursive implementation of Array.prototype.map
 * 
 * @param {Function} fn Callback to transform array elements
 * @param {Array} param1 Array destructured into head and ...tail
 * @return {Array} Transformed array
 */
const recursiveMap = function (fn, [head, ...tail]) {
    if (head === undefined && tail.length < 1) {
        return [];
    }

    return [fn(head), ...recursiveMap(fn, tail)];
}

console.log(recursiveMap(function(str) {
    return str.toLowerCase();
}, items));

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  
  */

/**
 * Takes a Strings and returns the first letter
 * 
 * @param {String} str a string
 * @returns {String} first letter
 */
const firstLetter = function (str) {
    return str[0];
}

// Process first item in array
function firstItem(items, fn) {
    return fn(items[0]);
}

// Get first letter of first in an array of strings
console.log(firstItem(items, firstLetter));

function getLength(arr, cb) {
  return cb(arr.length);
}

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

function contains(item, list, cb) {
  return cb(list.includes(item));
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  const removed = [];
  for (let i = 0; i < array.length; i++) {
      if (!removed.includes(array[i])) {
          removed.push(array[i]);
      }
  }

  return removed;
}

// Alternatively
function removeDuplicatesV2(array, fn) {
    return fn(Array.from(new Set(array)));
}
