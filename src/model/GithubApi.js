import GitHub from "github-api";

class GitHubApi {
  constructor() {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    if (token === undefined || token === "") {
      throw new Error("REACT_APP_GITHUB_TOKEN not defined");
    }

    this.gh = new GitHub({
      username: "vnugent",
      token: token
    });
  }

  get_repo_details = (userId, repoName, resultFn) => {
    const repo = this.gh.getRepo(userId, repoName);
    repo.getDetails().then(data => {
      if (data.status === 200) {
        resultFn(data.data);
      }
    });
  };

  get_repo_issues = (userId, repoName, resultFn) => {
    const issueWrapper = this.gh.getIssues(userId, repoName);
    issueWrapper.listIssues().then(data => {
      if (data.status === 200) {
        resultFn(data);
      }
    });
  };
}

const github = new GitHubApi();

export default github;
