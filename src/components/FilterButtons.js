import React from "react";

function FilterButtons(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-success rounded-0 btn-sm mx-2 my-3 w-25 small"
        aria-pressed={props.isPressed}
        disabled={props.isPressed}
        onClick={() => props.setFilter(props.name)}
      >
        {props.name}
      </button>
    </>
  );
}

export default FilterButtons;
