function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = 0;
  //create counter for keeping track of what index of the list we're on
    return function() {
    var roll = list[counter++]
    if (counter >= list.length) {
    counter = 0;
  }
    return roll;
  }
  };



var rollLoadedDie = makeLoadedDie();


console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
