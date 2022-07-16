import React, { useState } from "react";
import FilterButtons from "./FilterButtons";
import Todo from "./Todo";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import Modal from "./Modal";

function Main() {
  //main function to combine the state as well as to call all functions

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [filter, setFilter] = useState("All");
  const [showAdd, setShowAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const filters = {
    All: (task) => !task.deleted,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed && !task.deleted,
    Deleted: (task) => task.deleted,
  };

  const handleSubmit = (e) => {
    // used to call the add task function
    e.preventDefault();
    addTask(name);
    setName("");
  };

  function deletePerm(id) {
    // deletes a task permanently
    dispatch(actionCreators.deletePermTasks(id));
  }

  function handleSub(e) {
    if (name !== "") {
      // checks if field is filled and then decides which action to do
      setShowAdd(false);
      handleSubmit(e);
    } else {
      alert("Please enter some task first!");
    }
  }

  const taskList = tasks.filter(filters[filter]).map((task) => (
    // filter the tasks based on the filter and map them accordingly
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      deleted={task.deleted}
      deletePerm={deletePerm}
      key={task.id}
      taskCompleted={taskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      tasks={tasks}
      setEdit={setEdit}
      edit={edit}
    />
  ));

  function heading() {
    // sets the heading when each filter is applied based on number of tasks and filter
    const word = taskList.length === 1 ? "task" : "tasks";
    let endWord;
    if (filter === "Active") {
      endWord = "remaining";
    }
    let headingText = `${taskList.length} ${word} ${endWord}`;
    if (filter === "All") {
      headingText = "Checklist of tasks";
    }
    if (filter === "Completed") {
      headingText = "Completed tasks";
    }
    if (filter === "Deleted") {
      headingText = "Deleted tasks";
    }
    return headingText;
  }

  const filterNames = Object.keys(filters);

  function addTask(name) {
    // sets the newTask array and dispatches it to create a new task
    const newTask = {
      id: nanoid(),
      name: name,
      completed: false,
      deleted: false,
    };
    dispatch(actionCreators.saveTask(newTask));
  }

  function taskCompleted(id) {
    // dispatches a call which will set the task to completed
    dispatch(actionCreators.compTask(id));
  }

  function deleteTask(id, comp) {
    // soft deletes a task only if it is completed else shows a alert
    if (comp === true) {
      dispatch(actionCreators.deletedTask(id));
    } else {
      alert("Incomplete tasks cannot be deleted!");
    }
  }

  function editTask(id, newName) {
    // dispatches a call to edit the task
    dispatch(actionCreators.editedTask(id, newName));
  }

  function handleAdd() {
    // set the showAdd state to true
    setEdit(false);
    setShowAdd(true);
  }

  const filterList = filterNames.map((name) => (
    // maps filterNames to display filter buttons
    <FilterButtons
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <>
      <Modal
        sname={name}
        setName={setName}
        handleSub={handleSub}
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        edit={edit}
      />

      {/* Main UI of the task app */}
      <div className="d-flex justify-content-center">
        <div className="container col-md-6 mx-3 m-3 p-3 mb-5 align-center rounded prime">
          <div className=" d-flex align-items-center justify-content-center flex-column">
            <h1 className="font-weight-bold">Todolist</h1>
            <h4>What tasks needs to be done?</h4>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            {/* Displays filterlist button here */}
            {filterList}
          </div>
          <div className="my-2">
            <div className="d-flex">
              <h4 id="list-heading" className="w-100 ms-2">
                {/* Calls heading function to display heading */}
                {heading()}
              </h4>
              <div className="d-flex fs-1 justify-content-end align-items-center">
                <i
                  className="fa-solid fa-circle-plus cursor fs-1 green"
                  onClick={handleAdd} //It calls handleAdd method
                  title="Add Tasks"
                ></i>
              </div>
            </div>
            {/* It will display tasklist in reverse so new task is added on Top */}
            {taskList.length !== 0 ? (
              taskList.reverse()
            ) : (
              <div className="ms-2 fs-6"> Nothing to show here :(</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
