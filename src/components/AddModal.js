import React from "react";
import "./Todo.css";

function AddModal({ name, setName, handleSub, showAdd, setShowAdd }) {
  if (!showAdd) {
    return null;
  }
  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      id="exampleModal3"
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
            <h5 className="modal-title" id="exampleModalLabel3">
              Add New Task
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowAdd(false)}
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              type="text"
              className="w-100 p-4 my-1 font darkgreen"
              id="newTodoTask"
              autoComplete="off"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="modal-footer d-flex flex-row justify-content-center small">
            <button
              type="button"
              className="btn btn-primary w-25"
              data-bs-dismiss="modal"
              onClick={() => setShowAdd(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success w-25"
              onClick={(e) => handleSub(e)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
