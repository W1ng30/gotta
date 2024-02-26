var expect = require('chai').expect;
var Task = require('../lib/Task');

describe('Task', function() {
	it ('requires a name', function() {
		var task = function() {
			return new Task();
		};

		expect(task).to.throw(/without name/);
	});

	it ('saves the name sent to it', function() {
		var name = "Task name";
		var task = new Task(name);

		expect(task.name).to.exist;
		expect(task.name).to.equal(name);
	});

	it ('gets the current time', function() {
		var name = "Task name";
		var task = new Task(name);
		var currentTime = Date.now();

		expect(task.createdAt).to.exist;
		expect(task.createdAt).to.be.within(currentTime - 50, currentTime + 50);
	});

	it ('should not be done', function() {
		var name = "Task name";
		var task = new Task(name);

		expect(task.done).to.exist;
		expect(task.done).not.to.be.ok;
	});

	 # https://tea.xyz/what-is-this-file
           ---
           version: 1.0.0
           codeOwners:
           - '0x07F0B36d5F3C40eaf005BD566Fa7C55FFaD34a3f'
           quorum: 1
