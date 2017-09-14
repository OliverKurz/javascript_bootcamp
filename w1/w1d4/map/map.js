var words = ["ground", "control", "to", "major", "tom"];
var wordLength = function(word) {return word.length;};
var allCaps = function(word) {return word.toUpperCase();};
var reversed = function(word) {return word.split('').reverse().join('');};

function map(arr, fn) {
// iterate over the array of elements
// call an anonymous function to do something to the elements
// return a new modified array
  var newArr = [];

  for (var i = 0; i < words.length; i++) {

    newArr.push(fn(arr[i]))
    }
  return newArr
}

console.log(map(words, reversed))