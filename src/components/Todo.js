import React, { useState } from "react";
import Modal from "./Modal";
import "./Todo.css";

function Todo(props) {
  const [newName, setNewName] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    props.editTask(props.id, newName);
    setNewName("");
  }

  function handleEdit() {
    setShow(true);
    setNewName(props.name);
  }
  return (
    <>
      <Modal
        name={props.name}
        id={props.id}
        newName={newName}
        setNewName={setNewName}
        show={show}
        setShow={setShow}
        handleSubmit={handleSubmit}
      />
      <div className="d-flex c-cb my-3 ms-5 text-wrap">
        <input
          id={`item-${props.id}`}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.taskCompleted(props.id)}
        />
        <label
          className="text-break todo-label w-100"
          htmlFor={`item-${props.id}`}
        >
          {props.name}
        </label>
        <div className="d-flex me-3 justify-content-end align-items-center">
          {!props.deleted ? (
            <i
              className="fa fa-edit mx-2 cursor black"
              onClick={() => {
                handleEdit(props.id);
                setShow(true);
              }}
              title="Edit Note"
            ></i>
          ) : (
            <i
              className="fa-solid fa-recycle mx-2 text-success cursor"
              onClick={() => props.deleteTask(props.id, props.completed)}
              title="Recover Note"
            ></i>
          )}
          {!props.deleted ? (
            <i
              className="fa fa-trash-alt mx-1 cursor red"
              onClick={() => props.deleteTask(props.id, props.completed)}
              title="Delete Note"
            ></i>
          ) : (
            <i
              className="fa fa-trash-alt mx-1 cursor red"
              onClick={() => props.deletePerm(props.id, props.completed)}
              title="Delete Permanently"
            ></i>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
