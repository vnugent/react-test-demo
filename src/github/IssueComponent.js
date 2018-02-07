import React, { Component } from "react";

class IssueComponent extends Component {
  render() {
    return <div>Issues: {this.props.openIssueCount}</div>;
  }
}

export default IssueComponent;
