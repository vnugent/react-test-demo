import React, { Component } from "react";

import Navbar from "./Navbar";
import RepoComponent from "./github/RepoComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RepoComponent userName="kubernetes" repoName="kubernetes" />
        <RepoComponent userName="facebook" repoName="react" />
        <RepoComponent userName="torvalds" repoName="linux" />
      </div>
    );
  }
}

export default App;
