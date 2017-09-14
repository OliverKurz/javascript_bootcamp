function obfuscate(str) {
  for (var i = 0; i < str.length; i++) {
    return str.replace(/a/g, "4").replace("e", "3").replace("o", "0").replace("l", "1");
  }
}

  console.log(obfuscate("aaaaaaaa"));

/*

if there is a "a" replace with 4
if there is a "e" replace with 3
if there is a "o" replace with 0
if there is a "l" replace with 1

.replace(/ /g,'%20')
*/