var Rat = function(name){
  this.name = name;
};

Rat.prototype = {
  touchFood: function(food) {
    return food.poisonedStatus = true;
  }
}

module.exports = Rat;