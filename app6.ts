// 6. TS Enums
// Assignment: Create a TypeScript program that manages a task list. Use an enum to represent the status of each task (e.g., Pending, In Progress, Completed). Implement functionality to add tasks, update their status, and filter tasks by status.
// Requirements:
// Define an enum to represent different task statuses.
// Create a type for Task that includes properties such as description, due date, and status (using the enum).
// Write functions to add new tasks, change the status of a task, and retrieve tasks based on their status.

//defining enum
enum taskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in-progress",
    COMPLETED = "complete",
}

//creating type for task
type task = {
    id: number;
    name: string;
    description?: string;
    dueDate: string;
    status: taskStatus;
};

let tasks: task[] = [
    {
        id: 1,
        name: "Learn TypeScript",
        description: "Complete the TypeScript basics tutorial",
        dueDate: "2024-12-10",
        status: taskStatus.IN_PROGRESS,
    },
    {
        id: 2,
        name: "Write Code",
        description: "Implement the project features",
        dueDate: "2024-12-15",
        status: taskStatus.PENDING,
    },
    {
        id: 3,
        name: "Submit Project",
        description: "Submit the completed project to the client",
        dueDate: "2024-12-20",
        status: taskStatus.COMPLETED,
    },
    {
        id: 4,
        name: "Plan Budget",
        description: "Prepare a budget plan for the next quarter",
        dueDate: "2024-12-25",
        status: taskStatus.PENDING,
    },
    {
        id: 5,
        name: "Team Meeting",
        description: "Conduct a meeting to discuss project milestones",
        dueDate: "2024-12-28",
        status: taskStatus.IN_PROGRESS,
    },
];

//function to add task
function addNewTask(newTask: task): void {
    tasks.push(newTask);
}

//function to change status using id
function changeStatus(id: number, newStatus: taskStatus): void {
    tasks[id - 1].status = newStatus;
}

//function to retrieve tasks based on their status
function retriveTasks(getStatus: taskStatus): void {
    for (let task of tasks) {
        if (task.status === getStatus) {
            console.log(task);
        }
    }
}

//calling function to add task
addNewTask({
    id: 6,
    name: "Code Review",
    description: "Review the code for the new feature implementation",
    dueDate: "2024-12-30",
    status: taskStatus.PENDING,
});

console.log(tasks);

//calling function to change status
changeStatus(5, taskStatus.COMPLETED);

//calling function to retrieve tasks based on their status
retriveTasks(taskStatus.PENDING);
