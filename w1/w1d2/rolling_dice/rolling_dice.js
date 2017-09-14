var diceRoll = Number(process.argv[2]);

function diceRandomizer(num) {
  var statement = ""

  for (var i = 1; i <= num; i++) {
    if (i === num) {
      statement += Math.floor(Math.random() * 6 + 1);
    } else if (i !== num) {
      statement += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return statement;
}

console.log("Rolled " + diceRoll + " dice: " + diceRandomizer(diceRoll));