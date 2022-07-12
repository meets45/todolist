export const saveTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: task,
    });
  };
};
export const deletePermTasks = (id) => {
  return (dispatch) => {
    dispatch({
      type: "deleteP",
      id: id,
    });
  };
};
export const editedTask = (id, name) => {
  return (dispatch) => {
    dispatch({
      type: "edit",
      id: id,
      name: name,
    });
  };
};
export const deletedTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };
};
export const compTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: "completed",
      id: id,
    });
  };
};
