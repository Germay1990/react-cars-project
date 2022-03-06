import React from "react";

function Header(props) {
  return (
    <div className="header">
      <nav className="navbar main-navbar-custom">
        <form style={{ display: "block", margin: "auto" }} className="d-flex">
          <input
            style={{ width: "550px" }}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
      <nav className="navbar sub-navbar-custom"></nav>
    </div>
  );
}
export default Header;