var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');
var assert = require('assert');

describe('hero', function(){

var hero;
var task;
var food;
var heroToo;
var task2;
var task3;


  beforeEach(function(){
    hero = new Hero("HackerMan", 100, "sandwiches");
    heroToo = new Hero("TriceraCops", 50, "flapjacks");

    food = new Food("pizza", 20);
    food2 = new Food("flapjacks", 20);

    task = new Task(10, 10, 10, false);
    task2 = new Task(2, 3, 1, false);
    task3 = new Task(5, 4, 5, false);

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

  it("when eaten food should replenish health", function() {
    assert.strictEqual(50, heroToo.health);
    heroToo.eatFood(food);
    assert.strictEqual(70, heroToo.health);
  })

  it("if food is favourite it should replenish value * 1.5", function(){
    heroToo.eatFood(food2);
    assert.strictEqual(80, heroToo.health);
  })

  it("hero can sort tasks by difficulty highest first", function() {
    hero.addTask(task2);
    hero.addTask(task);
    hero.sortTasks(this.tasks, "difficulty", "desc")
    assert.deepEqual([task, task2], hero.sortTasks(this.tasks, "difficulty", "desc"));
  })

  it("hero can sort tasks by urgency lowest first", function() {
    hero.addTask(task2);
    hero.addTask(task);
    hero.addTask(task3);
    hero.sortTasks(this.tasks, "urgency", "asc")
    assert.deepEqual([task2, task3, task], hero.sortTasks(this.tasks, "urgency", "asc"))
  })

  it("hero can sort tasks by rewards highest first", function() {
    hero.addTask(task2);
    hero.addTask(task);
    hero.addTask(task3);
    assert.deepEqual([task, task3, task2], hero.sortTasks(this.tasks, "reward", "desc"))
  })













})