"use strict";

const fs = jest.genMockFromModule("github-api");

let mockRepo = Object.create({});

const __setMockRepoStats = ({ starCount, issueCount }) => {
  mockRepo = {
    stargazers_count: starCount,
    open_issues_count: issueCount
  };
};

const get_repo_details = (userId, repoName, resultFn) => {
  resultFn(mockRepo);
};

export { __setMockRepoStats, get_repo_details };
