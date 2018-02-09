import React from "react";
import ReactDOM from "react-dom";

import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import App from "./App";
import RepoStatsComponent from "./github/RepoStatsComponent";
import Navbar from "./Navbar";
import StarComponent from "./github/StarComponent";

import * as github from "./model/GithubApi";

describe("Test suite 'Smoke'", () => {
  let githubMock;
  beforeEach(() => {
    githubMock = sinon.mock(github);
    //     githubMock
    //       .expects("exportFunc")
    //       .once()
    //       .returns("This is mocked exportFunc");
  });

  it("should render 1 Navbar and 3 RepoStatsComponentS", function() {
    const app = shallow(<App />);
    expect(app.find(Navbar)).toHaveLength(1);
    expect(app.find(RepoStatsComponent)).toHaveLength(3);
  });

  it("verify StarComponent rendering", () => {
    const star = shallow(<StarComponent starCount={35} />);
    expect(star.text()).toEqual("Star 35");
  });

  it("should pass repo stats to child components", () => {
    const repo = shallow(<RepoStatsComponent />);
    var stub = sinon.stub(repo, "update_repo_stats", () => {
      repo.setState({
        star_count: 35,
        open_issues_count: 7
      });
    });
    expect(app.find(StarComponent).props("starCount")).toEqual(5);
  });
});
