import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <nav className="container navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
        </div>
      </nav>
    </>
  );
}
