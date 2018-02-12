"use strict";

import React from "react";
import ReactDOM from "react-dom";

import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import App from "../App";
import RepoComponent from "../github/RepoComponent";
import Navbar from "../Navbar";
import StarComponent from "../github/StarComponent";
import IssueComponent from "../github/IssueComponent";

jest.mock("../model/GithubApi");

describe("Test suite 'Smoke'", () => {
  it("should render 1 Navbar and 3 RepoStatsComponentS", function() {
    const app = shallow(<App />);
    expect(app.find(Navbar)).toHaveLength(1);
    expect(app.find(RepoComponent)).toHaveLength(3);
  });

  it("verify StarComponent rendering", () => {
    const star = shallow(<StarComponent starCount={35} />);
    expect(star.text()).toMatch("35");
  });

  it("should pass correct repo stats to child components", () => {
    require("../model/GithubApi").__setMockRepoStats({
      starCount: 21,
      issueCount: 7
    });
    const repo = shallow(<RepoComponent />);
    expect(repo.find(StarComponent).props().starCount).toEqual(21);
    expect(repo.find(IssueComponent).props().openIssueCount).toEqual(7);
  });
});
