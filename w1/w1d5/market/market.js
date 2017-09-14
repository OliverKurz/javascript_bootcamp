var stocks = [45, 24, 35, 31, 40, 38, 11]
var result = []
function maxProfit() {

  if (stocks[0] > stocks[1]) {
    result.push(stocks[0] - stocks[1]);

  } if (stocks[0] > stocks[2]) {
    result.push(stocks[1] - stocks[2]);

  } if (stocks[0] > stocks[3]) {
    result.push(stocks[0] - stocks[3]);

  } if (stocks[0] > stocks[4]) {
    result.push(stocks[0] - stocks[4]);

  } if (stocks[0] > stocks[5]) {
    result.push(stocks[0] - stocks[5]);

  } if (stocks[0] > stocks[6]) {
    result.push(stocks[0] - stocks[6]);

  } if (stocks[1] > stocks[2]) {
    result.push(stocks[1] - stocks[2]);

  } if (stocks[1] > stocks[3]) {
    result.push(stocks[1] - stocks[3]);

  } if (stocks[1] > stocks[4]) {
    result.push(stocks[1] - stocks[4]);

  } if (stocks[1] > stocks[5]) {
    result.push(stocks[1] - stocks[5]);

  } if (stocks[1] > stocks[6]) {
    result.push(stocks[1] - stocks[6]);

  } if (stocks[2] > stocks[3]) {
    result.push(stocks[2] - stocks[3]);

  } if (stocks[2] > stocks[4]) {
    result.push(stocks[2] - stocks[4]);

  } if (stocks[2] > stocks[5]) {
    result.push(stocks[2] - stocks[5]);

  } if (stocks[2] > stocks[6]) {
    result.push(stocks[2] - stocks[6]);

  } if (stocks[3] > stocks[4]) {
    result.push(stocks[3] - stocks[4]);

  } if (stocks[3] > stocks[5]) {
    result.push(stocks[3] - stocks[5]);

  } if (stocks[3] > stocks[6]) {
    result.push(stocks[3] - stocks[6]);

  } if (stocks[4] > stocks[5]) {
    result.push(stocks[4] - stocks[5]);

  } if (stocks[4] > stocks[6]) {
    result.push(stocks[4] - stocks[6]);

  } if (stocks[5] > stocks[6]) {
    result.push(stocks[5] - stocks[6]);

console.log(Math.max.apply(null, result))
  }
}

 maxProfit()