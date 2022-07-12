import React from "react";
import "./Todo.css";

function Modal({ name, id, newName, setNewName, show, setShow, handleSubmit }) {
  if (!show) {
    return null;
  }
  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      id="exampleModal2"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            animationDuration: "0.3s",
            animationName: "animate-pop",
            animationTimingFunction: "cubic-bezier(.26, .53, .74, 1.48)",
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title wrap" id="exampleModalLabel2">
              Edit {name}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              id={id}
              className="todo-text w-100 p-4 my-1 font darkgreen"
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              autoComplete="off"
            />
          </div>
          <div className="modal-footer d-flex flex-row justify-content-center small">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="btn btn-primary w-25"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success w-25"
              onClick={handleSubmit}
              disabled={newName.length === 0}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
