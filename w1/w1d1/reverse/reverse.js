var newStr = "";

function reverse(str) {
 for (var i = str.length -1; i >= 0; i--) {
  newStr += str[i];
 }
console.log(newStr)
}

reverse("hello");


/*
function reverse(str) {
  return str.split('').slice(0,2);
}

console.log(reverse("hello"));
*/