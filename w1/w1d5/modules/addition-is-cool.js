 var privateFunction = function (num) {
// only code within this constructor function can call this
console.log("The sum is " + num * 2)
    };

module.exports = {
  Add: 2,
  explain: function() {
//call child function and log its code
    privateFunction(this.Add)
  }
};

