var taskList = new Array();	// make new array 

var addTaskClick = function(){
	console.log("add task");
	var task = prompt("Enter a task: ", "");	// text, default value
	if (task != null && task != ""){				// if we have a value
		taskList.push(task);		// taskList[taskList.length] = task;
		console.log(taskList);
		taskListToTextArea();		// **
	}
}

var sortTasksClick = function(){
	taskList.sort(); 				// ask array to sort itself
	taskListToTextArea();	// write task list to text area
}

var taskListToTextArea = function(){
	var i = 0;	// init to zero
	var t = "";	// init to empty string
	while (i < taskList.length) {
		t += (parseInt(i) + 1) + ": " + taskList[i] + "\n"; 	// t = t + taskList[i];
		i++; 																	// i += 1; // i = i + 1;
	}
	$("task_list").value = t;
}

var $ = function(id){													
	return document.getElementById(id);
}

window.onload = function(){
	$("add_task").onclick = addTaskClick;
	$("sort_tasks").onclick = sortTasksClick;
}



