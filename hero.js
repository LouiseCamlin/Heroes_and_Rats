var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];

};

Hero.prototype = {
  talk: function(){
    return "Evil doers beware, my name is " + this.name;
  },

  addTask: function(task) {
    this.tasks.push(task); 
  },

  eatFood(food) {
    if (food.name === this.favouriteFood){
      return this.health += (food.replenishmentValue * 1.5)
    } 
    else {
    } 
    return this.health += food.replenishmentValue
  }
}




module.exports = Hero;