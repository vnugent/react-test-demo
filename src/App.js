import React, { Component } from "react";

import Navbar from "./Navbar";
import RepoStatsComponent from "./github/RepoStatsComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RepoStatsComponent userName="kubernetes" repoName="kubernetes" />
        <RepoStatsComponent userName="facebook" repoName="react" />
        <RepoStatsComponent userName="torvalds" repoName="linux" />
      </div>
    );
  }
}

export default App;
