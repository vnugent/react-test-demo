import GitHub from "github-api";

const token = process.env.REACT_APP_GITHUB_TOKEN;
if (token === undefined || token === "") {
  console.error("REACT_APP_GITHUB_TOKEN not defined");
}

const gh = new GitHub({
  username: "vnugent",
  token: token
});

const get_repo_details = (userId, repoName, resultFn) => {
  const repo = gh.getRepo(userId, repoName);
  repo.getDetails().then(data => {
    if (data.status === 200) {
      resultFn(data.data);
    }
  });
};

const get_repo_issues = (userId, repoName, resultFn) => {
  const issueWrapper = gh.getIssues(userId, repoName);
  issueWrapper.listIssues().then(data => {
    if (data.status === 200) {
      resultFn(data);
    }
  });
};

export { get_repo_details, get_repo_issues };
