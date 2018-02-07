import React, { Component } from "react";

import StarComponent from "./StarComponent";
import IssueComponent from "./IssueComponent";

import { get_repo_details, get_repo_issues } from "../model/GithubApi";

class RepoStatsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star_count: 0,
      open_issues_count: 0
    };
  }

  componentDidMount = () => {
    get_repo_details(this.props.userName, this.props.repoName, data => {
      this.setState({
        star_count: data.stargazers_count,
        open_issues_count: data.open_issues_count
      });
    });

    // get_repo_issues("kubernetes", "kubernetes", data => {
    //   console.log(data);
    //   this.setState({
    //     issueList: data
    //   });
    // });
  };

  render() {
    return (
      <div>
        <h1>{`${this.props.userName}/${this.props.repoName}`}</h1>
        <div>
          <StarComponent starCount={this.state.star_count} />
          <IssueComponent openIssueCount={this.state.open_issues_count} />
        </div>
      </div>
    );
  }
}

export default RepoStatsComponent;
