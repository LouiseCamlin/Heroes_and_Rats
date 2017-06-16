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
  }
}




module.exports = Hero;