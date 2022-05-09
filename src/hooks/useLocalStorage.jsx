import { v4 as uuidv4 } from "uuid";

const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("taskAdded"));
    return tasks ? tasks : [];
}

const addTask = (task) => {
    const tasks = getTasks();
    const newTask = { id: uuidv4(), ...task }
}