var Hero = require('../hero');
var Task = require('../task')
var assert = require('assert');

describe('hero', function(){

var hero;
var task

  beforeEach(function(){
    hero = new Hero("HackerMan", 100, "sandwiches");
    task = new Task(100, 10, "10 gold and a party", false);
  });

  it("hero should have a name", function() {
    assert.strictEqual("HackerMan", hero.name);
  });

  it("hero should have a health", function() {
    assert.strictEqual(100, hero.health);
  });

  it("hero should have a favourite food", function() {
    assert.strictEqual("sandwiches", hero.favouriteFood);
  })

  it("hero should start with no tasks", function() {
    assert.strictEqual(0, hero.tasks.length);
  })

  it("hero should be able to talk", function() {
    assert.strictEqual("Evil doers beware, my name is HackerMan", hero.talk());
  })

  it("hero should be able to add a task to tasks", function(){
    hero.addTask(task);
    assert.strictEqual(1, hero.tasks.length);
  })






})