function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestWord(list).length;
  var border = repeat('*', longest + 4);

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

function longestWord(sentence) {
  var longest = sentence[0];
  for (word of sentence) {
    if (longest.length <= word.length) {
    longest = word;
    }
  }
  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');