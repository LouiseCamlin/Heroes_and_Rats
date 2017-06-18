var Rat = require('../rat');
var Food = require('../food');
var assert = require('assert');

describe('rat', function(){

  var rat;
  var food;


  beforeEach(function(){

    rat = new Rat("Ratigan")
    food = new Food("pizza", 20, false);
    
  });

  it("rat has name", function(){
    assert.strictEqual("Ratigan", rat.name);
  });

  it("rat can poison food", function(){
    rat.touchFood(food);
    assert.strictEqual(true, food.poisonedStatus);
  })

  


})