// Create a new task by creating a new object
// A new task will be created as incomplete
function newTask(title, desc) {
  const task = {
    title: title,
    description: desc,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed.`);
      if (!this.complete) { console.log(`Reminder: ${this.title} = ${this.description}`)}
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box."); // task 0
const task2 = newTask("Do Laundry", "Start cycle, fold & put away."); // task 1
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
setTimeout(() => {
  task1.markCompleted();
  task1.logState(); // Clean Cat Litter has been completed
}, 3000);

task2.logState();
setTimeout(() => {
  task2.markCompleted();
  task2.logState();
}, 8000);
