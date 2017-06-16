var Task = require('../task');
var assert = require('assert');

describe ('task', function(){

  var task;

  beforeEach(function(){
    task = new Task(100, 10, "10 gold and a party", false);
  });

  it("task should have a difficulty", function() {
    assert.strictEqual(100, task.difficulty);
  });

  it("task should have an urgency", function() {
    assert.strictEqual(10, task.urgency);
  });

  it("task should have a reward", function() {
    assert.strictEqual("10 gold and a party", task.reward);
  });

  it("task should have a status", function() {
    assert.strictEqual(false, task.completedStatus);
  })






})