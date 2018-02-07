import React, { Component } from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="Navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://www.wikipedia.org/">Wikipedia</a>
        </li>
        <li>
          <a href="https://github.com">Github</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
