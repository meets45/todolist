import React from "react";
import "./Todo.css";

// Modal function to add and edit the tasks as and when needed

function Modal({
  name,
  sname,
  setName,
  handleSub,
  showAdd,
  setShowAdd,
  id,
  newName,
  setNewName,
  show,
  setShow,
  handleSubmit,
  edit,
}) {
  // if showAdd state is true it will show add modal else it will return null

  let addModal = showAdd ? (
    <div
      className="modal fade show"
      tabIndex="-1"
      id="exampleModal3"
      style={{ display: "block", backgroundColor: "rgba(18, 18, 18, 0.5)" }}
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            backgroundColor: "#242425",
            animationDuration: "0.3s",
            animationName: "animate-pop",
            animationTimingFunction: "cubic-bezier(.26, .53, .74, 1.48)",
          }}
        >
          <div
            className="modal-header"
            style={{ borderBottom: "1px solid #626262" }}
          >
            <h5 className="modal-title text-light" id="exampleModalLabel3">
              Add New Task
            </h5>
            <button
              type="button"
              className="btn-close"
              style={{ backgroundColor: "#ffffff" }}
              onClick={() => setShowAdd(false)}
            ></button>
          </div>
          <div className="modal-body" style={{ border: "none" }}>
            <textarea
              type="text"
              className="w-100 p-4 my-1 font"
              id="newTodoTask"
              autoComplete="off"
              style={{ color: "#ffffff", backgroundColor: "#363636" }}
              value={sname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div
            className="modal-footer d-flex flex-row justify-content-center small"
            style={{ borderTop: "none" }}
          >
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
  ) : null;

  let editModal = show ? (
    // if show state is true it will show edit modal else it will return null

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
            backgroundColor: "#242424",
            animationDuration: "0.3s",
            animationName: "animate-pop",
            animationTimingFunction: "cubic-bezier(.26, .53, .74, 1.48)",
          }}
        >
          <div
            className="modal-header"
            style={{ borderBottom: "1px solid #626262" }}
          >
            <h5
              className="modal-title wrap"
              id="exampleModalLabel2"
              style={{ color: "#ffffff" }}
            >
              Edit {name}
            </h5>
            <button
              type="button"
              className="btn-close"
              style={{ backgroundColor: "#ffffff" }}
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              id={id}
              className="todo-text w-100 p-4 my-1 font"
              type="text"
              style={{ color: "#ffffff", backgroundColor: "#363636" }}
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              autoComplete="off"
            />
          </div>
          <div
            className="modal-footer d-flex flex-row justify-content-center small"
            style={{ borderTop: "none" }}
          >
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
  ) : null;
  return edit ? editModal : addModal;
}
export default Modal;
