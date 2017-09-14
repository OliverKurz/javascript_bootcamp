function singlePig(str) {
  var arr = str.split("");
  arr.push(arr.shift());
  var joined = arr.join("") + "ay";
  return joined;
}

var sentence = process.argv.slice(2);
var result = sentence.map (word => singlePig(word)).join(" ");

console.log (result)