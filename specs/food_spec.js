var Food = require('../food');
var assert = require('assert');

describe ('food', function(){

  var food

  beforeEach(function() {
    food = new Food("pizza", 20); 
  });

  it("food should have a name", function() {
    assert.strictEqual("pizza", food.name);
  });

  it("food should have replenishment value", function() {
    assert.strictEqual(20, food.replenishmentValue);
  });












});