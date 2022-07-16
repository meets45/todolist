import React from "react";

function Navbar() {
  // Navbar component to display a navbar
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark navbar-fixed">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="/">
            Todolist
          </a>
          <div className="text-white fs-6 me-2">Stay organized & focused.</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
