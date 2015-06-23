var tasksCompleted = {
    'Anna': 29,
    'Serg': 350,
    'Elena': 1,
    'Anton': 99
};

var maxTasks = function (task) {
    var max = 0;
    var i = 0;
    for (i in task) {
        if (max < task[i]) {
            max = task[i];
            console.log(i);
        }
    }
    console.log(i);
}

maxTasks(tasksCompleted);