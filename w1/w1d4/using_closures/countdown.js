var list = ["T-minus 3...","T-minus 2...","T-minus 1...","Blast Off!","Rockets already gone, bub!"]
  var counter = 0;

var countdownGenerator = function (x) {

  return function() {
  var sentence = list[counter++]
  if (counter >= list.length) {
    counter = 4;
    }
    console.log(sentence);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!