import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark navbar-fixed">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="/">
            Todoist
          </a>
          <div className="text-white fs-6 me-2">
            Become focused & organized with Todoist
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
