import React, { Component } from "react";

class IssueComponent extends Component {
  render() {
    return (
      <div className="stat-component issue-component">
        Issues: {this.props.openIssueCount}
      </div>
    );
  }
}

export default IssueComponent;
