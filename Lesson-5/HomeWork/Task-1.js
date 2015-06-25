var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var maxTasks = function (task) {
    var max = 0;
    var best = 0;
    for (var i in task) {
        if (max < task[i]) {
            max = task[i];
            best = i;
        }
    }
    console.log(best);
}

maxTasks(tasksCompleted);