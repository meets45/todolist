import React, { useState } from "react";
import FilterButtons from "./FilterButtons";
import Todo from "./Todo";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import AddModal from "./AddModal";

function Main() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filters = {
    All: (task) => !task.deleted,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed && !task.deleted,
    Deleted: (task) => task.deleted,
  };

  const [name, setName] = useState("");
  const [filter, setFilter] = useState("All");
  const [showAdd, setShowAdd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    setName("");
  };

  function deletePerm(id) {
    dispatch(actionCreators.deletePermTasks(id));
  }

  function handleSub(e) {
    if (name !== "") {
      setShowAdd(false);
      handleSubmit(e);
    } else {
      alert("Please enter some task first!");
    }
  }

  const taskList = tasks
    .filter(filters[filter])
    .map((task) => (
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
      />
    ));

  function heading() {
    const word = taskList.length === 1 ? "task" : "tasks";
    let endWord;
    if (filter === "Completed") {
      endWord = "completed";
    } else if (filter === "Active") {
      endWord = "remaining";
    }
    let headingText = `${taskList.length} ${word} ${endWord}`;
    if (filter === "All") {
      headingText = "Checklist of tasks";
    }
    if (filter === "Deleted") {
      headingText = "Deleted tasks";
    }
    return headingText;
  }

  const filterNames = Object.keys(filters);

  function addTask(name) {
    const newTask = {
      id: nanoid(),
      name: name,
      completed: false,
      deleted: false,
    };
    dispatch(actionCreators.saveTask(newTask));
  }

  function taskCompleted(id) {
    dispatch(actionCreators.compTask(id));
  }

  function deleteTask(id, comp) {
    if (comp === true) {
      dispatch(actionCreators.deletedTask(id));
    } else {
      alert("Incomplete tasks cannot be deleted!");
    }
  }

  function editTask(id, newName) {
    dispatch(actionCreators.editedTask(id, newName));
  }

  function handleAdd() {
    setShowAdd(true);
  }

  const filterList = filterNames.map((name) => (
    <FilterButtons
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <>
      <AddModal
        name={name}
        setName={setName}
        handleSub={handleSub}
        showAdd={showAdd}
        setShowAdd={setShowAdd}
      />

      <div className="d-flex justify-content-center">
        <div className="container col-md-6 shadow-lg p-3 mb-5 bg-white align-center rounded m-3">
          <div className=" d-flex align-items-center justify-content-center flex-column">
            <h1 className="font-weight-bold">Todoist</h1>
            <h4>What tasks needs to be done?</h4>
          </div>
          <div className="d-flex mx-3 flex-row align-items-center justify-content-center">
            {filterList}
          </div>
          <div className="my-2">
            <div className="d-flex">
              <h4 id="list-heading" className="mx-5 w-100 darkgreen">
                {heading()}
              </h4>
              <div className="d-flex fs-1 justify-content-end align-items-center">
                <i
                  className="fa-solid fa-circle-plus cursor text-success green me-3"
                  onClick={handleAdd}
                  title="Add Tasks"
                ></i>
              </div>
            </div>
            {taskList.reverse()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
